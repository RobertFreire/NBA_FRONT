import { Container, FlipCardBack, FlipCardFront, FlipCardInner, MarketingImage, MarketingText, PlayerBasicInformation, PlayerContainer, PlayersContainer } from './styles'
import NBA from '../../assets/NBA.png';
import { useQuery } from '@tanstack/react-query';
import { getTeamInformation } from '../../services/queries/Team';
import { useNavigate, useParams } from 'react-router-dom';
import { getTeamPlayer } from '../../services/queries/Players';
import { Player } from '../../services/queries/Players/interface';
import { GiBasketballJersey } from 'react-icons/gi';
import Select from '../../Components/Select';


const Players = () => {

  const { teamId } = useParams()

  const navigate = useNavigate()

  const { data: TeamInformation,
    isLoading: isLoadingTeamInformation,
    isError: isErrorTeamInformation,
  } = useQuery({
    queryKey: ['teamInformation', teamId],
    queryFn: () => getTeamInformation(Number(teamId)),
    enabled: !!teamId,
  });

  const { data: PlayerInformation,
    isLoading: isLoadingPlayerInformation,
    isError: isErrorPlayerInformation,
  } = useQuery({
    queryKey: ['playerInformation', teamId],
    queryFn: () => getTeamPlayer(Number(teamId)),
    enabled: !!teamId,
  });


  const isLoading = isLoadingTeamInformation || isLoadingPlayerInformation
  const isError = isErrorTeamInformation || isErrorPlayerInformation

  if (isLoading || isError) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Container>
        <MarketingImage>
          <img src={NBA} alt="Marketing Image" />
          <MarketingText>
            <h1> {TeamInformation?.full_name}</h1>
          </MarketingText>
        </MarketingImage>


        <PlayersContainer>
          {PlayerInformation?.map((player: Player) => (
            <PlayerContainer key={player.id}>
              <FlipCardInner className="flip-card-inner">
                <FlipCardFront>
                  <img src={player.image_url} alt={player.name} style={{ width: '100%', height: 'auto' }} />
                  <PlayerBasicInformation>
                    <div style={{ width: '100%' }}>
                      <h2>{player.name.split(' ')[0]}</h2>
                      <h2>{player.name.split(' ')[1]}</h2>
                    </div>
                    <h1><GiBasketballJersey size={40} />{player.experience}</h1>
                  </PlayerBasicInformation>
                </FlipCardFront>
                <FlipCardBack>
                  <div>
                    {player.position && <h1>Position: {player.position}</h1>}
                    {player.height && <h1>Height: {player.height}</h1>}
                    {player.weight && <h1>Weight: {player.weight}</h1>}
                    {player.salary && <h1>Salary: {player.salary ?? '-'}</h1>}
                    {player.college && <h1>College: {player.college}</h1>}
                    {player.age && <h1>Age: {player.age ?? '-'}</h1>}
                  </div>
                </FlipCardBack>
              </FlipCardInner>
            </PlayerContainer>
          ))}
        </PlayersContainer>

      </Container>
    </div >
  )
}

export default Players