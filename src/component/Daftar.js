import React from 'react'

class Daftar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSubmitted: false,
        };

        this.inputName = React.createRef();
        this.inputEmail = React.createRef();
        this.inputNumber = React.createRef();
        this.inputPassword = React.createRef();
        this.inputCheck = React.createRef();
        this.inputFile = React.createRef();
        this.inputPick = React.createRef();
    }

    handleSubmit() {
        this.setState({ isSubmitted: true });
    }

    render() {
        let registerForm;
        // Jika Form disubmit maka akan ada tampilan berhasil
        if (this.state.isSubmitted) {
            registerForm = (
                <div className='register-message'>
                    <p>Pendaftaran Berhasil</p>
                </div>
            );
        } else {
            registerForm = (
                // Membuat Form dengan Uncontrolled Component 
                <form onSubmit={() => { this.handleSubmit() }}>
                    <label>Nama</label>

                    <input className='daftar-type' name="name" type="text" ref={this.inputName} />

                    <label>Email</label>
                    <input className='daftar-type' name="email" type="text" ref={this.inputEmail} />

                    <label> No Handphone</label>
                    <input className='daftar-type' name="hp" type="number" ref={this.inputNumber} />

                    <label>Password</label>
                    <input className='daftar-type' name="password" type="password" ref={this.inputPassword} />

                    <label>Konfirmasi Password</label>
                    <input className='daftar-type' name="password" type="password" ref={this.inputPassword} />


                    <label>
                        <input name="check" type="checkbox" ref={this.inputCheck} />
                    Saya Menyetujui <span style={{ fontWeight: 'bold' }}>Syarat dan Ketentuan</span>
                    </label>

                    <input
                        className='daftar-type'
                        type='submit'
                        value='Daftar'
                    />
                </form>
            )
        }

        return (
            <div className='daftar-container'>
                <div className='form-daftar'>
                    {registerForm}
                </div>
            </div>
        )
    }
}

export default Daftar;