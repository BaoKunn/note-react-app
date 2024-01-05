export default {
    authors: [
        {
            id: 123,
            name: 'Author',
        },
        {
            id: 999,
            name: 'Faker',
        }
    ],
    folders: [
        {
            id: "1",
            name: 'Home',
            createAt: '2022-11-18T03:42:13Z',
            authorId: 123,
        },
        {
            id: "2",
            name: 'New Folder',
            createAt: '2022-11-18T03:42:13Z',
            authorId: 999,
        },
        {
            id: "3",
            name: 'Work',
            createAt: '2022-11-18T03:42:13Z',
            authorId: 123,
        },
    ],
    notes: [
        {
            id: '1',
            content: '<p>Go to market</p>',
            folderId: '1',
        },
        {
            id: '2',
            content: '<p>Go to school</p>',
            folderId: '2',
        },
        {
            id: '3',
            content: '<p>Go to library</p>',
            folderId: '3',
        },
        {
            id: '4',
            content: '<p>Go to cinema</p>',
            folderId: '1',
        },
    ]
}