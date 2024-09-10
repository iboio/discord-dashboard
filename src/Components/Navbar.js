import React from 'react';

export default function Navbar() {
    return (
        <header style={{
            width: '100%',
            height: '60px',
            backgroundColor: '#333',
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
            boxSizing: 'border-box',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: 1000
        }}>
            <div style={{ fontSize: '1.5em' }}>My App</div>
            <nav>
                <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    margin: 0,
                    padding: 0
                }}>
                    <li style={{ marginLeft: '20px' }}>Home</li>
                    <li style={{ marginLeft: '20px' }}>About</li>
                    <li style={{ marginLeft: '20px' }}>Contact</li>
                </ul>
            </nav>
        </header>
    );
}
