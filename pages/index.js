import config from "../config.json";
import styled from "styled-components";



function HomePage() {
    const estiloDaHomePage = { backgroundColor: "red" };
    const mensagem = "Welcome to AluraTube!";

    console.log(config.playlists)

    return (
        //para ter uma flexibilidade maior no retorno, usar o parênteses
        <div style={estiloDaHomePage}>
            <Menu></Menu>
            <Header></Header>
            <TimeLine playlists={config.playlists}>Children automatico</TimeLine>
        </div>
    )
}

function Menu() {
    return (
        <div>
            Menu
        </div>
    )
}

const StyledHeader = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items? center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner"/> */}

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.nome}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}
function TimeLine(propriedades) {
    console.log("dentro do componente", propriedades.playlists);
    const playlistNames = Object.keys(propriedades.playlists);
    // Statement
    // Reorno por expressão

    return (
        <div>
            {playlistNames.map((playlistNames) => {
                const videos = propriedades.playlists[playlistNames];
                return (
                    <section>
                        <h2>{playlistNames}</h2>
                        <div>
                            {videos.map((video => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            ))}
                        </div>
                    </section>

                )
            })}
        </div>
    )
}
export default HomePage