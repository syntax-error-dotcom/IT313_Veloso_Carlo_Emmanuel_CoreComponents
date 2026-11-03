import { Image, StyleSheet, View, Text, Pressable } from "react-native";

type StudentCardProps = {
    id: string;
    name: string;
    year: string;
    photoUrl: string;
    flagged: boolean;
    onToggleFlag: (id: string) => void;
}

export default function StudentCard({ id, name, year, photoUrl, flagged, onToggleFlag }: 
    StudentCardProps) {
        return (
            <View style={styles.card}>
                <Image source={{ uri : photoUrl }} style={styles.photo} />

                <View style={styles.info}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.year}>{year}</Text>
                </View>

                <Pressable onPress={() => onToggleFlag(id)}
                
                style={({ pressed }) => [  
                    styles.flagButton,
                    flagged && styles.flagButtonOn,
                    pressed && styles.flagButtonPressed
                ]}
                >
                    <Text style={[styles.flagText, flagged && styles.flagTextOn]}>
                        {flagged ? " ★ Flagged" : "Flag for advising"}
                    </Text>
                </Pressable>
            </View>
        );
    }

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ddd"


    },
    photo: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    info: {flex: 1, marginLeft: 12},
    name: {
        fontSize: 16,
        fontWeight: "bold",},
    year: {
        fontSize: 14,
        color: "#777"},
    flagButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 16,
        borderColor: "#6b5fa5",
        borderWidth: 1
    },
    flagButtonOn: { backgroundColor: "#d4900a", borderColor: "#d4900a" },
    flagButtonPressed: { opacity: 0.6},
    flagText: {
        color: "#6b5fa5",
        fontSize: 12,
        fontWeight: "bold"
    },
    flagTextOn: { color: "#fff" },





});