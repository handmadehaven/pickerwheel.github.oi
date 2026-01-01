import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    root: '.',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html',
                team: 'team-picker-wheel.html',
                yesno: 'yes-no-picker-wheel.html',
                number: 'number-picker-wheel.html',
                letter: 'letter-picker-wheel.html',
                country: 'country-picker-wheel.html',
                state: 'state-picker-wheel.html',
                color: 'color-picker-wheel.html',
                image: 'image-picker-wheel.html',
                date: 'date-picker-wheel.html',
                instagram: 'instagram-comment-picker.html',
                mlb: 'mlb-picker-wheel.html',
                nba: 'nba-picker-wheel.html',
                nfl: 'nfl-picker-wheel.html'
            }
        }
    }
});
