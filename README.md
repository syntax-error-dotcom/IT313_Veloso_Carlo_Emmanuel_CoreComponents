# IT313 Lab 6: Student Directory Viewer

## The Problem

The IT313 registrar has given you a list of students who need academic advising this term. Your task is to build a 
small Expo (React Native) screen that lets an adviser browse and search this list, in the style of a real student
directory app.

## Component Structure

**StudentCard** (`src/components/StudentCard.tsx`)
- Displays one student: a `View` containing an `Image` and two `Text` elements (name and year).
- Receives `id`, `name`, `year`, `photoUrl`, `flagged`, and `onToggleFlag` as props.
- Has a `Pressable` flag button. Its style is a function of `({ pressed })` and also changes color based on `flagged`.
- It does not own any state. It only tells the parent when its button is pressed.

**StudentDirectory** (`src/components/StudentDirectory.tsx`)
- The parent component. It holds the `students` array and the search `query` in state.
- Has a `TextInput` (controlled with `value` and `onChangeText`) for searching.
- Filters the students by name (case-insensitive) and renders one `StudentCard` per match inside a `ScrollView`, using `.map()` with `key={student.id}`.
- Provides `toggleFlag`, which updates a student's `flagged` value in state.

**index.tsx** (`src/app/index.tsx`)
- The app entry screen. It renders `<StudentDirectory />`.

## How to Run

1. Install dependencies:
   ```
   npm install
   ```
2. Start the app:
   ```
   npx expo start
   ```
3. Open it in Expo Go on your phone (scan the QR code) or press `a` / `i` for an emulator.
