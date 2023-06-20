import { Loader } from "components/Loader/Loader";
import { useCast } from '../../hooks/useCast'
import { 
    CastList,
    CastImg,
    CastP
 } from "./Cast.styled";

const Cast = () => {
    const { cast, error, isLoading } = useCast()

    return (
        <>
        <CastList>
        {cast.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <CastImg
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : `https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg`
                    }
                    alt={original_name}   
                  />
              <CastP> Actor: {original_name}</CastP>
              <CastP>Character: {character}</CastP>
            </li>
          ))}
        </CastList>
        {isLoading && <Loader />}
        {error && <div>{error}</div>}
        </>
    )

}
export default Cast;