

export const home = (req, res) => res.send('welcome to express');

export const LoginPage = (req, res) => {
    res.end('asdasda');
};

export const signUp = (req, res) => {
    console.log(req.body)
    const userData = req.body
    res.json({ message: 'Login successful', userData });
}

