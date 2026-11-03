import { useState } from "react";
import StudentCard from "./StudentCard";
import { View, Text, StyleSheet, TextInput, ScrollView} from "react-native";

const InitialStudents = [
    { id: "s1", name: "Ana Cruz", year: "3rd Year", photoUrl: "https://i.pravatar.cc/100?img=1", flagged : false },
    { id: "s2", name: "Bea Santos", year: "2nd Year", photoUrl: "https://i.pravatar.cc/100?img=2", flagged : false },
    { id: "s3", name: "Cid Ramos", year: "4th Year", photoUrl: "https://i.pravatar.cc/100?img=3", flagged : false },
    { id: "s4", name: "Dex Alonzo", year: "1st Year", photoUrl: "https://i.pravatar.cc/100?img=4", flagged : false },
    { id: "s5", name: "Eli Tan", year: "3rd Year", photoUrl: "https://i.pravatar.cc/100?mg=5", flagged : false },
];


export default function StudentDirectory() {
    const [students, setStudents] = useState(InitialStudents);
    const [query, setQuery] = useState("");

    const toggleFlag = (id : string) => {
        setStudents((current) => {
            return current.map((s) => (s.id === id ? { ...s, flagged: !s.flagged } : s));
        });
    };

    const visibleStudents = students.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()));

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Student Directory</Text>
                <Text style={styles.subtitle}>{students.length} students this term</Text>
            </View>
        
        <TextInput
            style={styles.search}
            placeholder="Search students..."
            value={query}
            onChangeText={setQuery}
        />

        <ScrollView contentContainerStyle={styles.list}>
            {visibleStudents.map((student) => (
                <StudentCard 
                    key={student.id}
                    id={student.id}
                    name={student.name}
                    year={student.year}
                    photoUrl={student.photoUrl}
                    flagged={student.flagged}
                    onToggleFlag={toggleFlag}
                />
            ))}
        </ScrollView>
        </View>
    );

}

const styles =  StyleSheet.create ({
    container: { flex: 1, backgroundColor: "#f6f5b" },
    header: { backgroundColor: "#1a1550", padding:20},
    search: { backgroundColor: "white", padding: 10, margin: 10, borderRadius: 5},
    list: { paddingHorizontal: 10, paddingBottom: 20},
    subtitle: { fontSize: 12, color: "#b5adad"},
    title: { fontSize: 20, fontWeight: "bold", color: "#c9b7b7"},

})