function LoginView() {
    return (
<div className="flex justify-center items-center h-screen">
    <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Авторизация</h2>
        <form>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Логин</label>
                <input type="text" id="login" name="login" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Введите логин" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Пароль</label>
                <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Введите пароль" />
            </div>
            <div className="text-center">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-blue-300">Войти</button>
            </div>
        </form>
    </div>
</div>
    )
}

export default LoginView;