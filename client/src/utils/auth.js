import decode from 'jwt-decode';

class AuthService {

    getUser() {
        return decode(this.getToken());
    };

    loggedIn() {
        const token = this.getToken();
        return token ? true : false;
    };

    getToken() {
        return localStorage.getItem('id_token');
    };

    login(idToken) {
        localStorage.setItem( 'id_token', idToken );
        window.location.assign('/dashboard');
    }

    logout() {
        localStorage.removeItem('id_token');
        window.location.reload();
    }
};

export default new AuthService();