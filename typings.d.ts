interface Post {
    prompt: string,
    photoUrl: string,
    createdAt: admin.firestore.Timestamp,
    user: {
        _id: string;
        name: string;
        avatar: string
    }
}