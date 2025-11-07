// Global State Management
const appState = {
    userLevel: null,
    totalPoints: 0,
    currentStreak: 0,
    lastPracticeDate: null,
    itemsMastered: 0,
    achievements: [],
    exercisesCompleted: 0,
    srsItems: [],
    currentMode: null,
    currentExerciseIndex: 0,
    currentExercises: [],
    sessionScore: 0,
    sessionTotal: 0,
    grammarAccuracy: {},
    speakingCompleted: 0,
    vocabularyMastered: []
};

// Spanish Content Database
const contentDatabase = {
    vocabulary: {
        A1: [
            { spanish: 'Hola', english: 'Hello', category: 'greetings', emoji: '👋' },
            { spanish: 'Adiós', english: 'Goodbye', category: 'greetings', emoji: '👋' },
            { spanish: 'Buenos días', english: 'Good morning', category: 'greetings', emoji: '🌅' },
            { spanish: 'Buenas tardes', english: 'Good afternoon', category: 'greetings', emoji: '☀️' },
            { spanish: 'Buenas noches', english: 'Good night', category: 'greetings', emoji: '🌙' },
            { spanish: 'Por favor', english: 'Please', category: 'greetings', emoji: '🙏' },
            { spanish: 'Gracias', english: 'Thank you', category: 'greetings', emoji: '🙏' },
            { spanish: 'De nada', english: "You're welcome", category: 'greetings', emoji: '😊' },
            { spanish: 'Sí', english: 'Yes', category: 'greetings', emoji: '✅' },
            { spanish: 'No', english: 'No', category: 'greetings', emoji: '❌' },
            { spanish: 'Uno', english: 'One', category: 'numbers', emoji: '1️⃣' },
            { spanish: 'Dos', english: 'Two', category: 'numbers', emoji: '2️⃣' },
            { spanish: 'Tres', english: 'Three', category: 'numbers', emoji: '3️⃣' },
            { spanish: 'Cuatro', english: 'Four', category: 'numbers', emoji: '4️⃣' },
            { spanish: 'Cinco', english: 'Five', category: 'numbers', emoji: '5️⃣' },
            { spanish: 'Seis', english: 'Six', category: 'numbers', emoji: '6️⃣' },
            { spanish: 'Siete', english: 'Seven', category: 'numbers', emoji: '7️⃣' },
            { spanish: 'Ocho', english: 'Eight', category: 'numbers', emoji: '8️⃣' },
            { spanish: 'Nueve', english: 'Nine', category: 'numbers', emoji: '9️⃣' },
            { spanish: 'Diez', english: 'Ten', category: 'numbers', emoji: '🔟' },
            { spanish: 'Rojo', english: 'Red', category: 'colors', emoji: '🔴' },
            { spanish: 'Azul', english: 'Blue', category: 'colors', emoji: '🔵' },
            { spanish: 'Verde', english: 'Green', category: 'colors', emoji: '🟢' },
            { spanish: 'Amarillo', english: 'Yellow', category: 'colors', emoji: '🟡' },
            { spanish: 'Negro', english: 'Black', category: 'colors', emoji: '⚫' },
            { spanish: 'Blanco', english: 'White', category: 'colors', emoji: '⚪' },
            { spanish: 'Padre', english: 'Father', category: 'family', emoji: '👨' },
            { spanish: 'Madre', english: 'Mother', category: 'family', emoji: '👩' },
            { spanish: 'Hermano', english: 'Brother', category: 'family', emoji: '👦' },
            { spanish: 'Hermana', english: 'Sister', category: 'family', emoji: '👧' },
            { spanish: 'Hijo', english: 'Son', category: 'family', emoji: '👶' },
            { spanish: 'Hija', english: 'Daughter', category: 'family', emoji: '👶' },
            { spanish: 'Agua', english: 'Water', category: 'food', emoji: '💧' },
            { spanish: 'Pan', english: 'Bread', category: 'food', emoji: '🍞' },
            { spanish: 'Leche', english: 'Milk', category: 'food', emoji: '🥛' },
            { spanish: 'Café', english: 'Coffee', category: 'food', emoji: '☕' },
            { spanish: 'Manzana', english: 'Apple', category: 'food', emoji: '🍎' },
            { spanish: 'Naranja', english: 'Orange', category: 'food', emoji: '🍊' },
            { spanish: 'Comer', english: 'To eat', category: 'verbs', emoji: '🍽️' },
            { spanish: 'Beber', english: 'To drink', category: 'verbs', emoji: '🥤' },
            { spanish: 'Hablar', english: 'To speak', category: 'verbs', emoji: '💬' },
            { spanish: 'Vivir', english: 'To live', category: 'verbs', emoji: '🏠' },
            { spanish: 'Trabajar', english: 'To work', category: 'verbs', emoji: '💼' },
            { spanish: 'Estudiar', english: 'To study', category: 'verbs', emoji: '📚' },
            { spanish: 'Cabeza', english: 'Head', category: 'body', emoji: '🧠' },
            { spanish: 'Mano', english: 'Hand', category: 'body', emoji: '✋' },
            { spanish: 'Pie', english: 'Foot', category: 'body', emoji: '👣' },
            { spanish: 'Ojo', english: 'Eye', category: 'body', emoji: '👁️' },
            { spanish: 'Sol', english: 'Sun', category: 'weather', emoji: '☀️' },
            { spanish: 'Lluvia', english: 'Rain', category: 'weather', emoji: '🌧️' },
            { spanish: 'Nieve', english: 'Snow', category: 'weather', emoji: '❄️' }
        ],
        A2: [
            { spanish: 'Abuelo', english: 'Grandfather', category: 'family', emoji: '👴' },
            { spanish: 'Abuela', english: 'Grandmother', category: 'family', emoji: '👵' },
            { spanish: 'Tío', english: 'Uncle', category: 'family', emoji: '👨' },
            { spanish: 'Tía', english: 'Aunt', category: 'family', emoji: '👩' },
            { spanish: 'Primo', english: 'Cousin (male)', category: 'family', emoji: '👦' },
            { spanish: 'Prima', english: 'Cousin (female)', category: 'family', emoji: '👧' },
            { spanish: 'Veinte', english: 'Twenty', category: 'numbers', emoji: '2️⃣0️⃣' },
            { spanish: 'Treinta', english: 'Thirty', category: 'numbers', emoji: '3️⃣0️⃣' },
            { spanish: 'Cincuenta', english: 'Fifty', category: 'numbers', emoji: '5️⃣0️⃣' },
            { spanish: 'Cien', english: 'One hundred', category: 'numbers', emoji: '💯' },
            { spanish: 'Camisa', english: 'Shirt', category: 'clothing', emoji: '👕' },
            { spanish: 'Pantalón', english: 'Pants', category: 'clothing', emoji: '👖' },
            { spanish: 'Zapatos', english: 'Shoes', category: 'clothing', emoji: '👞' },
            { spanish: 'Sombrero', english: 'Hat', category: 'clothing', emoji: '🎩' },
            { spanish: 'Mesa', english: 'Table', category: 'house', emoji: '🪑' },
            { spanish: 'Silla', english: 'Chair', category: 'house', emoji: '🪑' },
            { spanish: 'Cama', english: 'Bed', category: 'house', emoji: '🛏️' },
            { spanish: 'Ventana', english: 'Window', category: 'house', emoji: '🪟' },
            { spanish: 'Puerta', english: 'Door', category: 'house', emoji: '🚪' },
            { spanish: 'Cocina', english: 'Kitchen', category: 'house', emoji: '🍳' },
            { spanish: 'Querer', english: 'To want', category: 'verbs', emoji: '❤️' },
            { spanish: 'Poder', english: 'To be able to', category: 'verbs', emoji: '💪' },
            { spanish: 'Deber', english: 'To must/should', category: 'verbs', emoji: '📋' },
            { spanish: 'Venir', english: 'To come', category: 'verbs', emoji: '👣' },
            { spanish: 'Salir', english: 'To leave/go out', category: 'verbs', emoji: '🚪' },
            { spanish: 'Nublado', english: 'Cloudy', category: 'weather', emoji: '☁️' },
            { spanish: 'Viento', english: 'Wind', category: 'weather', emoji: '💨' },
            { spanish: 'Calor', english: 'Heat', category: 'weather', emoji: '🔥' },
            { spanish: 'Frío', english: 'Cold', category: 'weather', emoji: '🧊' },
            { spanish: 'Temperatura', english: 'Temperature', category: 'weather', emoji: '🌡️' }
        ]
    },
    grammar: {
        A1: [
            {
                question: 'Yo ___ un estudiante.',
                options: ['soy', 'eres', 'es', 'son'],
                correct: 0,
                explanation: "Use 'soy' for 'I am' (yo)",
                topic: 'present_tense'
            },
            {
                question: 'Tú ___ mi amigo.',
                options: ['soy', 'eres', 'es', 'son'],
                correct: 1,
                explanation: "Use 'eres' for 'you are' (tú)",
                topic: 'present_tense'
            },
            {
                question: 'Ella ___ profesora.',
                options: ['soy', 'eres', 'es', 'son'],
                correct: 2,
                explanation: "Use 'es' for 'she/he is' (él/ella)",
                topic: 'present_tense'
            },
            {
                question: 'Nosotros ___ estudiantes.',
                options: ['soy', 'eres', 'es', 'somos'],
                correct: 3,
                explanation: "Use 'somos' for 'we are' (nosotros)",
                topic: 'present_tense'
            },
            {
                question: '___ casa es grande.',
                options: ['La', 'El', 'Los', 'Las'],
                correct: 0,
                explanation: "Use 'La' for feminine singular noun 'casa'",
                topic: 'articles'
            },
            {
                question: '___ libro es interesante.',
                options: ['La', 'El', 'Los', 'Las'],
                correct: 1,
                explanation: "Use 'El' for masculine singular noun 'libro'",
                topic: 'articles'
            },
            {
                question: '¿___ estás?',
                options: ['Cómo', 'Qué', 'Dónde', 'Cuándo'],
                correct: 0,
                explanation: "Use '¿Cómo?' to ask 'How?'",
                topic: 'questions'
            },
            {
                question: '¿___ vives?',
                options: ['Cómo', 'Qué', 'Dónde', 'Cuándo'],
                correct: 2,
                explanation: "Use '¿Dónde?' to ask 'Where?'",
                topic: 'questions'
            },
            {
                question: 'Yo ___ en Madrid.',
                options: ['vivo', 'vives', 'vive', 'viven'],
                correct: 0,
                explanation: "Use 'vivo' for 'I live' (yo vivir)",
                topic: 'present_tense'
            },
            {
                question: 'Ellos ___ español.',
                options: ['hablo', 'hablas', 'habla', 'hablan'],
                correct: 3,
                explanation: "Use 'hablan' for 'they speak' (ellos hablar)",
                topic: 'present_tense'
            },
            {
                question: 'Tú ___ café.',
                options: ['bebo', 'bebes', 'bebe', 'beben'],
                correct: 1,
                explanation: "Use 'bebes' for 'you drink' (tú beber)",
                topic: 'present_tense'
            },
            {
                question: 'Nosotros ___ en casa.',
                options: ['como', 'comes', 'come', 'comemos'],
                correct: 3,
                explanation: "Use 'comemos' for 'we eat' (nosotros comer)",
                topic: 'present_tense'
            },
            {
                question: '___ perro es pequeño.',
                options: ['La', 'El', 'Los', 'Las'],
                correct: 1,
                explanation: "Use 'El' for masculine singular noun 'perro'",
                topic: 'articles'
            },
            {
                question: '___ manzanas son rojas.',
                options: ['La', 'El', 'Los', 'Las'],
                correct: 3,
                explanation: "Use 'Las' for feminine plural noun 'manzanas'",
                topic: 'articles'
            },
            {
                question: '¿___ es tu nombre?',
                options: ['Cómo', 'Qué', 'Cuál', 'Quién'],
                correct: 2,
                explanation: "Use '¿Cuál?' to ask 'What?' when choosing",
                topic: 'questions'
            }
        ],
        A2: [
            {
                question: 'Yo ___ mucho café. (beber)',
                options: ['bebo', 'bebes', 'bebe', 'beben'],
                correct: 0,
                explanation: "Regular -er verb: 'bebo' for 'I drink'",
                topic: 'present_tense'
            },
            {
                question: 'Yo ___ la verdad. (saber)',
                options: ['sabo', 'sé', 'sepo', 'sabo'],
                correct: 1,
                explanation: "Irregular verb: 'sé' for 'I know'",
                topic: 'irregular_verbs'
            },
            {
                question: 'Ellos ___ al cine ayer.',
                options: ['van', 'fueron', 'iban', 'irán'],
                correct: 1,
                explanation: "Preterite tense: 'fueron' for 'they went' (completed action)",
                topic: 'preterite'
            },
            {
                question: 'Yo ___ un libro a María.',
                options: ['doy', 'dió', 'di', 'das'],
                correct: 2,
                explanation: "Preterite: 'di' for 'I gave'",
                topic: 'preterite'
            },
            {
                question: 'Mi casa es ___ grande ___ la tuya.',
                options: ['más...que', 'menos...que', 'tan...como', 'muy...de'],
                correct: 0,
                explanation: "Use 'más...que' for 'more...than'",
                topic: 'comparatives'
            },
            {
                question: 'Me gusta ___ libro.',
                options: ['este', 'esta', 'estos', 'estas'],
                correct: 0,
                explanation: "Use 'este' for masculine singular 'this book'",
                topic: 'demonstratives'
            },
            {
                question: 'Yo ___ hacer la tarea.',
                options: ['tengo que', 'tengo de', 'tener que', 'teniendo'],
                correct: 0,
                explanation: "Use 'tengo que' for 'I have to'",
                topic: 'obligation'
            },
            {
                question: '___ das el regalo a Juan.',
                options: ['Me', 'Te', 'Le', 'Les'],
                correct: 2,
                explanation: "Use 'Le' as indirect object pronoun for 'to him'",
                topic: 'pronouns'
            },
            {
                question: 'Nosotros ___ contentos.',
                options: ['somos', 'estamos', 'son', 'están'],
                correct: 1,
                explanation: "Use 'estamos' for temporary state (estar)",
                topic: 'ser_estar'
            },
            {
                question: 'El libro es ___.',
                options: ['interesante', 'interesanto', 'interesa', 'interesando'],
                correct: 0,
                explanation: "Adjectives ending in -e don't change for gender",
                topic: 'adjectives'
            }
        ]
    },
    speaking: {
        A1: [
            { spanish: 'Hola, ¿cómo estás?', english: 'Hello, how are you?' },
            { spanish: 'Buenos días', english: 'Good morning' },
            { spanish: 'Me llamo María', english: 'My name is María' },
            { spanish: 'Mucho gusto', english: 'Nice to meet you' },
            { spanish: 'Gracias por todo', english: 'Thank you for everything' },
            { spanish: 'Adiós, hasta luego', english: 'Goodbye, see you later' },
            { spanish: '¿Dónde está el baño?', english: 'Where is the bathroom?' },
            { spanish: 'No entiendo', english: "I don't understand" },
            { spanish: 'Habla más despacio, por favor', english: 'Speak more slowly, please' },
            { spanish: '¿Cuánto cuesta?', english: 'How much does it cost?' },
            { spanish: 'Yo soy de Estados Unidos', english: 'I am from the United States' },
            { spanish: 'Tengo hambre', english: 'I am hungry' },
            { spanish: 'Me gusta el español', english: 'I like Spanish' },
            { spanish: '¿Qué hora es?', english: 'What time is it?' },
            { spanish: 'Perdón, disculpe', english: 'Sorry, excuse me' }
        ],
        A2: [
            { spanish: 'Me gustaría pedir una mesa para dos', english: 'I would like to request a table for two' },
            { spanish: '¿Puede ayudarme, por favor?', english: 'Can you help me, please?' },
            { spanish: 'Estoy buscando la estación de tren', english: 'I am looking for the train station' },
            { spanish: '¿Dónde puedo comprar un billete?', english: 'Where can I buy a ticket?' },
            { spanish: 'Necesito ir al hospital', english: 'I need to go to the hospital' },
            { spanish: 'Me duele la cabeza', english: 'My head hurts' },
            { spanish: '¿Qué me recomienda?', english: 'What do you recommend?' },
            { spanish: 'La cuenta, por favor', english: 'The check, please' },
            { spanish: 'He perdido mi equipaje', english: 'I have lost my luggage' },
            { spanish: 'quisiera cambiar dinero', english: 'I would like to exchange money' },
            { spanish: '¿A qué hora sale el autobús?', english: 'What time does the bus leave?' },
            { spanish: 'Soy alérgico a los cacahuetes', english: 'I am allergic to peanuts' },
            { spanish: '¿Tiene esto en otra talla?', english: 'Do you have this in another size?' },
            { spanish: 'Me lo llevo', english: "I'll take it" },
            { spanish: '¿Acepta tarjetas de crédito?', english: 'Do you accept credit cards?' }
        ]
    },
    listening: {
        A1: [
            {
                spanish: 'Hola, me llamo Pedro',
                options: ['Hello, my name is Pedro', 'Goodbye, my name is Pedro', 'Hello, his name is Pedro'],
                correct: 0
            },
            {
                spanish: 'Tengo veinte años',
                options: ['I am twenty years old', 'I have twenty books', 'I want twenty'],
                correct: 0
            },
            {
                spanish: 'Mi color favorito es azul',
                options: ['My favorite color is blue', 'My favorite color is red', 'I like blue'],
                correct: 0
            },
            {
                spanish: '¿Dónde está la biblioteca?',
                options: ['Where is the library?', 'Where is the bathroom?', 'Where is the store?'],
                correct: 0
            },
            {
                spanish: 'Me gusta comer pizza',
                options: ['I like to eat pizza', 'I want to eat pizza', 'I need pizza'],
                correct: 0
            },
            {
                spanish: 'Vivo en Madrid',
                options: ['I live in Madrid', 'I work in Madrid', 'I study in Madrid'],
                correct: 0
            },
            {
                spanish: 'Mi madre es profesora',
                options: ['My mother is a teacher', 'My father is a teacher', 'My sister is a teacher'],
                correct: 0
            },
            {
                spanish: 'Hoy hace buen tiempo',
                options: ['Today the weather is good', 'Today it is raining', 'Today is cold'],
                correct: 0
            },
            {
                spanish: 'Necesito agua, por favor',
                options: ['I need water, please', 'I want water, please', 'I have water, please'],
                correct: 0
            },
            {
                spanish: 'El libro está sobre la mesa',
                options: ['The book is on the table', 'The book is under the table', 'The book is next to the table'],
                correct: 0
            }
        ],
        A2: [
            {
                spanish: 'Ayer fui al mercado y compré frutas',
                options: ['Yesterday I went to the market and bought fruits', 'Today I go to the market and buy fruits', 'Tomorrow I will go to the market'],
                correct: 0
            },
            {
                spanish: 'Mi hermano puede hablar tres idiomas',
                options: ['My brother can speak three languages', 'My brother wants to speak three languages', 'My brother speaks three languages'],
                correct: 0
            },
            {
                spanish: 'Tengo que estudiar para el examen',
                options: ['I have to study for the exam', 'I want to study for the exam', 'I am studying for the exam'],
                correct: 0
            },
            {
                spanish: 'El restaurante está cerrado los lunes',
                options: ['The restaurant is closed on Mondays', 'The restaurant is open on Mondays', 'The restaurant closes on Mondays'],
                correct: 0
            },
            {
                spanish: 'Me gustaría viajar a España el próximo año',
                options: ['I would like to travel to Spain next year', 'I traveled to Spain last year', 'I want to travel to Spain'],
                correct: 0
            },
            {
                spanish: 'Cuando era niño, vivía en el campo',
                options: ['When I was a child, I lived in the countryside', 'When I am a child, I live in the countryside', 'I was a child in the countryside'],
                correct: 0
            },
            {
                spanish: 'Esta película es más interesante que la otra',
                options: ['This movie is more interesting than the other', 'This movie is less interesting than the other', 'This movie is as interesting as the other'],
                correct: 0
            },
            {
                spanish: 'Le di el regalo a mi amiga',
                options: ['I gave the gift to my friend', 'She gave the gift to my friend', 'I give the gift to my friend'],
                correct: 0
            },
            {
                spanish: 'Voy a salir después de terminar mi trabajo',
                options: ['I am going to leave after finishing my work', 'I left after finishing my work', 'I leave after my work'],
                correct: 0
            },
            {
                spanish: 'Si hace buen tiempo, iremos a la playa',
                options: ['If the weather is good, we will go to the beach', 'When the weather is good, we go to the beach', 'The weather is good at the beach'],
                correct: 0
            }
        ]
    }
};

// Achievements Database
const achievements = [
    { id: 'first_step', name: 'First Step', description: 'Complete first lesson', icon: '🎯', condition: () => appState.exercisesCompleted >= 1 },
    { id: 'week_warrior', name: 'Week Warrior', description: '7-day streak', icon: '🔥', condition: () => appState.currentStreak >= 7 },
    { id: 'vocab_master', name: 'Vocab Master', description: 'Master 50 words', icon: '📚', condition: () => appState.vocabularyMastered.length >= 50 },
    { id: 'grammar_guru', name: 'Grammar Guru', description: '90% accuracy in grammar', icon: '✍️', condition: () => calculateGrammarAccuracy() >= 90 },
    { id: 'speaking_star', name: 'Speaking Star', description: 'Complete 10 speaking exercises', icon: '🎤', condition: () => appState.speakingCompleted >= 10 },
    { id: 'century_club', name: 'Century Club', description: '100 exercises completed', icon: '💯', condition: () => appState.exercisesCompleted >= 100 }
];

// Web Speech API
let speechSynthesis = window.speechSynthesis;
let speechRecognition = null;

if ('webkitSpeechRecognition' in window) {
    speechRecognition = new webkitSpeechRecognition();
    speechRecognition.continuous = false;
    speechRecognition.lang = 'es-ES';
} else if ('SpeechRecognition' in window) {
    speechRecognition = new SpeechRecognition();
    speechRecognition.continuous = false;
    speechRecognition.lang = 'es-ES';
}

// Screen Management
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    // Show/hide nav bar
    const navBar = document.getElementById('navBar');
    if (screenId === 'welcomeScreen' || screenId === 'levelScreen') {
        navBar.style.display = 'none';
    } else {
        navBar.style.display = 'flex';
    }
}

function startLearning() {
    showScreen('levelScreen');
}

function selectLevel(level) {
    appState.userLevel = level;
    updateStreak();
    showScreen('dashboardScreen');
    updateDashboard();
}

function goToDashboard() {
    showScreen('dashboardScreen');
    updateDashboard();
}

function updateDashboard() {
    document.getElementById('streakDisplay').textContent = appState.currentStreak;
    document.getElementById('pointsDisplay').textContent = appState.totalPoints;
    document.getElementById('masteredDisplay').textContent = appState.itemsMastered;
    
    const progress = Math.min((appState.totalPoints / 1000) * 100, 100);
    document.getElementById('progressFill').style.width = progress + '%';
}

// Streak Management
function updateStreak() {
    const today = new Date().toDateString();
    
    if (appState.lastPracticeDate === null) {
        appState.currentStreak = 1;
        appState.lastPracticeDate = today;
    } else if (appState.lastPracticeDate !== today) {
        const lastDate = new Date(appState.lastPracticeDate);
        const todayDate = new Date(today);
        const diffTime = todayDate - lastDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            appState.currentStreak++;
            appState.totalPoints += 25;
        } else if (diffDays > 1) {
            appState.currentStreak = 1;
        }
        
        appState.lastPracticeDate = today;
    }
}

// Mode Selection
function startMode(mode) {
    appState.currentMode = mode;
    appState.currentExerciseIndex = 0;
    appState.sessionScore = 0;
    appState.sessionTotal = 0;
    
    switch(mode) {
        case 'vocabulary':
            startVocabularyMode();
            break;
        case 'grammar':
            startGrammarMode();
            break;
        case 'speaking':
            startSpeakingMode();
            break;
        case 'listening':
            startListeningMode();
            break;
        case 'review':
            startReviewMode();
            break;
        case 'challenge':
            startChallengeMode();
            break;
    }
}

// Vocabulary Mode
function startVocabularyMode() {
    const vocab = contentDatabase.vocabulary[appState.userLevel];
    appState.currentExercises = shuffleArray([...vocab]).slice(0, 10);
    showScreen('exerciseScreen');
    document.getElementById('exerciseTitle').textContent = '📇 Vocabulary Builder';
    displayVocabularyCard();
}

function displayVocabularyCard() {
    const exercise = appState.currentExercises[appState.currentExerciseIndex];
    const card = document.getElementById('exerciseCard');
    
    document.getElementById('exerciseProgress').textContent = 
        `${appState.currentExerciseIndex + 1}/${appState.currentExercises.length}`;
    
    card.innerHTML = `
        <div class="word-emoji">${exercise.emoji}</div>
        <div class="word-display">${exercise.spanish}</div>
        <button class="btn btn-primary" onclick="speakWord('${exercise.spanish}')">🔊 Hear Pronunciation</button>
        <div class="word-translation" id="translation" style="display: none;">${exercise.english}</div>
        <div class="difficulty-buttons" id="difficultyButtons" style="display: none;">
            <button class="btn btn-easy" onclick="rateWord('easy')">😊 Easy (7 days)</button>
            <button class="btn btn-medium" onclick="rateWord('medium')">🤔 Medium (3 days)</button>
            <button class="btn btn-hard" onclick="rateWord('hard')">😓 Hard (1 day)</button>
        </div>
    `;
    
    // Auto-play audio
    setTimeout(() => speakWord(exercise.spanish), 500);
    
    // Show translation after 2 seconds
    setTimeout(() => {
        document.getElementById('translation').style.display = 'block';
        document.getElementById('difficultyButtons').style.display = 'flex';
    }, 2000);
}

function speakWord(text) {
    if (speechSynthesis) {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    }
}

function rateWord(difficulty) {
    const exercise = appState.currentExercises[appState.currentExerciseIndex];
    
    // Add to SRS system
    const daysUntilReview = difficulty === 'easy' ? 7 : difficulty === 'medium' ? 3 : 1;
    const reviewDate = new Date();
    reviewDate.setDate(reviewDate.getDate() + daysUntilReview);
    
    const existingIndex = appState.srsItems.findIndex(item => 
        item.spanish === exercise.spanish && item.type === 'vocabulary'
    );
    
    if (existingIndex >= 0) {
        appState.srsItems[existingIndex].nextReview = reviewDate;
        appState.srsItems[existingIndex].difficulty = difficulty;
    } else {
        appState.srsItems.push({
            type: 'vocabulary',
            content: exercise,
            spanish: exercise.spanish,
            nextReview: reviewDate,
            difficulty: difficulty,
            lastReview: new Date()
        });
    }
    
    // Track mastery
    if (difficulty === 'easy' && !appState.vocabularyMastered.includes(exercise.spanish)) {
        appState.vocabularyMastered.push(exercise.spanish);
        appState.itemsMastered++;
    }
    
    appState.sessionScore++;
    appState.sessionTotal++;
    appState.totalPoints += 10;
    
    // Move to next card
    appState.currentExerciseIndex++;
    
    if (appState.currentExerciseIndex < appState.currentExercises.length) {
        displayVocabularyCard();
    } else {
        finishExercise();
    }
}

// Grammar Mode
function startGrammarMode() {
    const grammar = contentDatabase.grammar[appState.userLevel];
    appState.currentExercises = shuffleArray([...grammar]).slice(0, 8);
    showScreen('exerciseScreen');
    document.getElementById('exerciseTitle').textContent = '📖 Grammar Practice';
    displayGrammarQuestion();
}

function displayGrammarQuestion() {
    const exercise = appState.currentExercises[appState.currentExerciseIndex];
    const card = document.getElementById('exerciseCard');
    
    document.getElementById('exerciseProgress').textContent = 
        `${appState.currentExerciseIndex + 1}/${appState.currentExercises.length}`;
    
    card.innerHTML = `
        <div class="grammar-question">${exercise.question}</div>
        <div class="grammar-options">
            ${exercise.options.map((option, index) => 
                `<button class="option-btn" onclick="checkGrammarAnswer(${index})">${option}</button>`
            ).join('')}
        </div>
        <div class="explanation" id="explanation" style="display: none;"></div>
    `;
}

function checkGrammarAnswer(selectedIndex) {
    const exercise = appState.currentExercises[appState.currentExerciseIndex];
    const buttons = document.querySelectorAll('.option-btn');
    const explanation = document.getElementById('explanation');
    
    buttons.forEach(btn => btn.disabled = true);
    
    const isCorrect = selectedIndex === exercise.correct;
    
    buttons[exercise.correct].classList.add('correct');
    if (!isCorrect) {
        buttons[selectedIndex].classList.add('incorrect');
    }
    
    explanation.textContent = exercise.explanation;
    explanation.style.display = 'block';
    
    // Track accuracy by topic
    if (!appState.grammarAccuracy[exercise.topic]) {
        appState.grammarAccuracy[exercise.topic] = { correct: 0, total: 0 };
    }
    appState.grammarAccuracy[exercise.topic].total++;
    if (isCorrect) {
        appState.grammarAccuracy[exercise.topic].correct++;
        appState.sessionScore++;
        appState.totalPoints += 10;
    }
    appState.sessionTotal++;
    
    // Auto-advance after 3 seconds
    setTimeout(() => {
        appState.currentExerciseIndex++;
        if (appState.currentExerciseIndex < appState.currentExercises.length) {
            displayGrammarQuestion();
        } else {
            finishExercise();
        }
    }, 3000);
}

// Speaking Mode
function startSpeakingMode() {
    const speaking = contentDatabase.speaking[appState.userLevel];
    appState.currentExercises = shuffleArray([...speaking]).slice(0, 5);
    showScreen('exerciseScreen');
    document.getElementById('exerciseTitle').textContent = '🎤 Speaking Practice';
    displaySpeakingPhrase();
}

function displaySpeakingPhrase() {
    const exercise = appState.currentExercises[appState.currentExerciseIndex];
    const card = document.getElementById('exerciseCard');
    
    document.getElementById('exerciseProgress').textContent = 
        `${appState.currentExerciseIndex + 1}/${appState.currentExercises.length}`;
    
    card.innerHTML = `
        <div class="speaking-phrase">${exercise.spanish}</div>
        <div style="color: var(--color-text-secondary); margin-bottom: var(--space-24);">${exercise.english}</div>
        <div class="audio-controls">
            <button class="btn btn-audio" onclick="speakWord('${exercise.spanish}')">🔊 Hear it</button>
            <button class="btn btn-record" id="recordBtn" onclick="startRecording()">🎤 Record</button>
        </div>
        <div class="feedback-message" id="feedbackMessage" style="display: none;"></div>
        <button class="btn btn-secondary" id="nextBtn" onclick="nextSpeakingExercise()" style="display: none; margin-top: var(--space-24);">Next →</button>
    `;
    
    // Auto-play audio
    setTimeout(() => speakWord(exercise.spanish), 500);
}

function startRecording() {
    if (!speechRecognition) {
        showFeedback('Speech recognition not supported in this browser', 'try');
        document.getElementById('nextBtn').style.display = 'inline-flex';
        return;
    }
    
    const recordBtn = document.getElementById('recordBtn');
    recordBtn.classList.add('recording');
    recordBtn.textContent = '🎤 Listening...';
    recordBtn.disabled = true;
    
    speechRecognition.start();
    
    speechRecognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript.toLowerCase();
        const exercise = appState.currentExercises[appState.currentExerciseIndex];
        const target = exercise.spanish.toLowerCase();
        
        // Simple similarity check
        const similarity = calculateSimilarity(transcript, target);
        
        let feedback, type;
        if (similarity > 0.7) {
            feedback = '🎉 Great! Perfect pronunciation!';
            type = 'great';
            appState.sessionScore++;
            appState.totalPoints += 10;
        } else if (similarity > 0.4) {
            feedback = '👍 Good try! Keep practicing!';
            type = 'good';
            appState.sessionScore += 0.5;
            appState.totalPoints += 5;
        } else {
            feedback = '💪 Try again! Listen carefully.';
            type = 'try';
        }
        
        appState.sessionTotal++;
        showFeedback(feedback, type);
        document.getElementById('nextBtn').style.display = 'inline-flex';
        recordBtn.classList.remove('recording');
    };
    
    speechRecognition.onerror = function() {
        recordBtn.classList.remove('recording');
        recordBtn.textContent = '🎤 Record';
        recordBtn.disabled = false;
        showFeedback('Could not hear you. Try again!', 'try');
    };
}

function showFeedback(message, type) {
    const feedback = document.getElementById('feedbackMessage');
    feedback.textContent = message;
    feedback.className = `feedback-message feedback-${type}`;
    feedback.style.display = 'block';
}

function nextSpeakingExercise() {
    appState.currentExerciseIndex++;
    if (appState.currentExerciseIndex < appState.currentExercises.length) {
        displaySpeakingPhrase();
    } else {
        appState.speakingCompleted++;
        finishExercise();
    }
}

function calculateSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
}

function levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    
    return matrix[str2.length][str1.length];
}

// Listening Mode
function startListeningMode() {
    const listening = contentDatabase.listening[appState.userLevel];
    appState.currentExercises = shuffleArray([...listening]).slice(0, 6);
    showScreen('exerciseScreen');
    document.getElementById('exerciseTitle').textContent = '🎧 Listening Comprehension';
    displayListeningQuestion();
}

function displayListeningQuestion() {
    const exercise = appState.currentExercises[appState.currentExerciseIndex];
    const card = document.getElementById('exerciseCard');
    
    document.getElementById('exerciseProgress').textContent = 
        `${appState.currentExerciseIndex + 1}/${appState.currentExercises.length}`;
    
    card.innerHTML = `
        <div class="listening-question">🎧 Listen and choose the correct translation</div>
        <button class="btn btn-primary" onclick="speakWord('${exercise.spanish}')" style="margin-bottom: var(--space-32);">🔊 Play Audio</button>
        <div class="grammar-options">
            ${exercise.options.map((option, index) => 
                `<button class="option-btn" onclick="checkListeningAnswer(${index})">${option}</button>`
            ).join('')}
        </div>
        <div class="explanation" id="explanation" style="display: none;"></div>
    `;
    
    // Auto-play audio
    setTimeout(() => speakWord(exercise.spanish), 500);
}

function checkListeningAnswer(selectedIndex) {
    const exercise = appState.currentExercises[appState.currentExerciseIndex];
    const buttons = document.querySelectorAll('.option-btn');
    const explanation = document.getElementById('explanation');
    
    buttons.forEach(btn => btn.disabled = true);
    
    const isCorrect = selectedIndex === exercise.correct;
    
    buttons[exercise.correct].classList.add('correct');
    if (!isCorrect) {
        buttons[selectedIndex].classList.add('incorrect');
    }
    
    explanation.textContent = `Correct: "${exercise.spanish}" means "${exercise.options[exercise.correct]}"`;
    explanation.style.display = 'block';
    
    if (isCorrect) {
        appState.sessionScore++;
        appState.totalPoints += 10;
    }
    appState.sessionTotal++;
    
    // Auto-advance after 3 seconds
    setTimeout(() => {
        appState.currentExerciseIndex++;
        if (appState.currentExerciseIndex < appState.currentExercises.length) {
            displayListeningQuestion();
        } else {
            finishExercise();
        }
    }, 3000);
}

// Review Mode (Spaced Repetition)
function startReviewMode() {
    const today = new Date();
    const dueItems = appState.srsItems.filter(item => new Date(item.nextReview) <= today);
    
    if (dueItems.length === 0) {
        showScreen('exerciseScreen');
        document.getElementById('exerciseTitle').textContent = '🔄 Quick Review';
        document.getElementById('exerciseProgress').textContent = '0/0';
        const card = document.getElementById('exerciseCard');
        card.innerHTML = `
            <div class="results-icon">✨</div>
            <h2>Great job!</h2>
            <p style="color: var(--color-text-secondary); margin-top: var(--space-16);">You have no items due for review right now.</p>
            <p style="color: var(--color-text-secondary); margin-top: var(--space-16);">Check back tomorrow or practice more to add items!</p>
            <button class="btn btn-primary" onclick="goToDashboard()" style="margin-top: var(--space-32);">Back to Dashboard</button>
        `;
        return;
    }
    
    appState.currentExercises = shuffleArray(dueItems).slice(0, 15);
    showScreen('exerciseScreen');
    document.getElementById('exerciseTitle').textContent = '🔄 Quick Review';
    displayReviewItem();
}

function displayReviewItem() {
    const item = appState.currentExercises[appState.currentExerciseIndex];
    
    if (item.type === 'vocabulary') {
        displayVocabularyCard();
    }
}

// Daily Challenge Mode
function startChallengeMode() {
    const vocab = contentDatabase.vocabulary[appState.userLevel];
    const grammar = contentDatabase.grammar[appState.userLevel];
    const listening = contentDatabase.listening[appState.userLevel];
    
    const mixed = [
        ...shuffleArray([...vocab]).slice(0, 4).map(v => ({type: 'vocabulary', content: v})),
        ...shuffleArray([...grammar]).slice(0, 3).map(g => ({type: 'grammar', content: g})),
        ...shuffleArray([...listening]).slice(0, 3).map(l => ({type: 'listening', content: l}))
    ];
    
    appState.currentExercises = shuffleArray(mixed);
    showScreen('exerciseScreen');
    document.getElementById('exerciseTitle').textContent = '⭐ Daily Challenge';
    displayChallengeItem();
}

function displayChallengeItem() {
    const item = appState.currentExercises[appState.currentExerciseIndex];
    
    if (item.type === 'vocabulary') {
        appState.currentExercises[appState.currentExerciseIndex] = item.content;
        displayVocabularyCard();
    } else if (item.type === 'grammar') {
        appState.currentExercises[appState.currentExerciseIndex] = item.content;
        displayGrammarQuestion();
    } else if (item.type === 'listening') {
        appState.currentExercises[appState.currentExerciseIndex] = item.content;
        displayListeningQuestion();
    }
}

// Finish Exercise
function finishExercise() {
    appState.exercisesCompleted++;
    
    const score = Math.round(appState.sessionScore);
    const total = appState.sessionTotal;
    const percentage = Math.round((score / total) * 100);
    
    // Bonus points
    if (percentage === 100) {
        appState.totalPoints += 50;
    }
    
    if (appState.currentMode === 'challenge') {
        appState.totalPoints += 100;
    }
    
    // Check achievements
    checkAchievements();
    
    // Show results
    showScreen('resultsScreen');
    
    document.getElementById('resultsScore').textContent = `${score}/${total}`;
    document.getElementById('pointsEarned').textContent = `+${Math.round(appState.sessionScore * 10)} points`;
    document.getElementById('accuracy').textContent = `${percentage}%`;
    document.getElementById('streakStatus').textContent = 'Maintained! 🔥';
    
    // Encouragement message
    let encouragement;
    if (percentage === 100) {
        encouragement = '🎉 Perfect score! Amazing work!';
        document.getElementById('resultsIcon').textContent = '🏆';
    } else if (percentage >= 80) {
        encouragement = '🌟 Excellent job! Keep it up!';
        document.getElementById('resultsIcon').textContent = '🎉';
    } else if (percentage >= 60) {
        encouragement = '👍 Good effort! You\'re improving!';
        document.getElementById('resultsIcon').textContent = '😊';
    } else {
        encouragement = '💪 Keep practicing! You\'ll get there!';
        document.getElementById('resultsIcon').textContent = '💪';
    }
    
    document.getElementById('encouragement').textContent = encouragement;
}

// Achievements
function checkAchievements() {
    achievements.forEach(achievement => {
        if (!appState.achievements.includes(achievement.id) && achievement.condition()) {
            appState.achievements.push(achievement.id);
            showAchievement(achievement);
        }
    });
}

function showAchievement(achievement) {
    const popup = document.getElementById('achievementPopup');
    document.getElementById('achievementIcon').textContent = achievement.icon;
    document.getElementById('achievementTitle').textContent = achievement.name;
    document.getElementById('achievementDesc').textContent = achievement.description;
    
    popup.classList.add('show');
    
    setTimeout(() => {
        popup.classList.remove('show');
    }, 5000);
}

function calculateGrammarAccuracy() {
    let totalCorrect = 0;
    let totalQuestions = 0;
    
    for (const topic in appState.grammarAccuracy) {
        totalCorrect += appState.grammarAccuracy[topic].correct;
        totalQuestions += appState.grammarAccuracy[topic].total;
    }
    
    return totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;
}

// Stats Screen
function showStats() {
    alert(`📊 Your Stats\n\n🔥 Streak: ${appState.currentStreak} days\n⭐ Points: ${appState.totalPoints}\n📚 Mastered: ${appState.itemsMastered} items\n✅ Exercises: ${appState.exercisesCompleted}\n🏆 Achievements: ${appState.achievements.length}`);
}

// Utility Functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize app
window.addEventListener('DOMContentLoaded', () => {
    showScreen('welcomeScreen');
});