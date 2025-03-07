export const registerUser = async (fullName: string, phone: string, email: string, password: string) => {
    const data = {
        fullName,
        phone,
        email,
        password,
    };

    try {
        const response = await fetch('http://192.168.0.22:8080/users/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            return { success: true, message: 'Cadastro realizado com sucesso!' };
        } else {
            return { success: false, message: 'Erro no cadastro!' };
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        return { success: false, message: 'Erro na requisição!' };
    }
};
