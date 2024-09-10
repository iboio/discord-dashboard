import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getGuilds } from "../Services/Api"; // API isteğini buradan alıyorsunuz.

export default function Default() {
    const [guilds, setGuilds] = useState([]);
    const navigate = useNavigate();

    // Verileri almak için useEffect kullanıyoruz
    useEffect(() => {
        getGuilds().then(data => setGuilds(data)).catch(err => console.error(err));
    }, []);

    // GuildList Component'i ana fonksiyonun içine taşımaya gerek yok
    const handleClick = (guildId) => {
        navigate(`/${guildId}/dashboard`);
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {guilds.map(guild => (
                <div
                    key={guild.guildId}
                    onClick={() => handleClick(guild.guildId)}
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundImage: `url(${guild.icon})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        border: '2px solid #000',
                        borderRadius: '8px',
                        padding: '10px',
                        color: '#fff',
                        textShadow: '1px 1px 2px black',
                    }}
                >
                    {guild.name}
                </div>
            ))}
        </div>
    );
}
