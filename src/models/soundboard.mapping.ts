// Interface

export interface SoundboardMap {
    button: ButtonMap;
    soundPath: string;
}

interface ButtonMap {
    name: string;
    color: string;
}

// Mocks

export const SoundboardMock = [
    {
        button: {
            name: 'Vagues',
            color: '#3498db'
        },
        soundPath: 'sounds/son1.mp3'
    },
    {
        button: {
            name: 'Applaudissements',
            color: '#2ecc71'
        },
        soundPath: 'sounds/son2.mp3'
    }
]