export default {
    data() {
        return {
            headers: [{
                    text: 'Utilisateurs',
                    align: 'start',
                    sortable: false,
                    value: 'nom'
                },
                {
                    text: 'Email',
                    value: 'email'
                },
                {
                    text: 'Role',
                    value: 'role'
                },
                {
                    text: 'Actions',
                    value: 'actions'
                },
            ],
            datas: [],
        }
    },
    created() {
        this.initalisation();
    },
    methods: {
        initalisation() {
            axios.get('/api/users')
                .then(({
                        data
                    }) =>
                    data.data.forEach(data => {
                        this.datas.push(data);
                    })
                )
                .catch();
        },
    }
}