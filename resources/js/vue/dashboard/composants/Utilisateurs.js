import CreateUtilisateur from './CreateUtilisateur.vue';
import DeleteUtilisateur from './DeleteUtilisateur.vue';

export default {
    components : {
        CreateUtilisateur,
        DeleteUtilisateur
    },
    data() {
        return {
            headers: [{
                    text: 'Utilisateurs',
                    align: 'start',
                    sortable: false,
                    value: 'name'
                },
                {
                    text: 'Email',
                    value: 'email'
                },
                {
                    text: 'Role',
                    value: 'id_role.role'
                },
                {
                    text: 'Actions',
                    value: 'actions'
                },
            ],
            datas: [],
            dialog: false
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