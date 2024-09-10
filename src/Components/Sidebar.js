import React from 'react';

export default function Sidebar() {
    return (
        <aside style={{
            width: '200px',
            height: '100vh',
            backgroundColor: '#444',
            color: '#fff',
            paddingTop: '80px', // Navbar'ın yüksekliğini hesaba katıyoruz.
            paddingLeft: '20px',
            boxSizing: 'border-box',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: 900, // Navbar'ın altında kalması için zIndex değeri biraz düşük.
        }}>
            <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
            }}>
                <li style={{ marginBottom: '20px' }}>Dashboard</li>
                <li style={{ marginBottom: '20px' }}>Settings</li>
                <li style={{ marginBottom: '20px' }}>Profile</li>
            </ul>
        </aside>
    );
}
