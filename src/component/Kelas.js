import React from 'react'

export default class Kelas extends React.Component {

    // Deklarasikan constructor
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }
    }

    // Deklarasi method handleClickLesson
    handleClickLesson() {
        this.setState({ isModalOpen: true })
    }

    // Deklarasi method handleClickClose
    handleClickClose() {
        this.setState({ isModalOpen: false })
    }



    render() {

        // Deklarasikan variable modal
        let modal;

        // Siapkan pernyataan if
        if (this.state.isModalOpen === true) {
            modal = (
                <div className='modal'>
                    <div className='modal-inner'>
                        <div className='modal-header'></div>
                        <div className='modal-introduction'>
                            <h2>{this.props.name}</h2>
                            <p>{this.props.introduction}</p>
                        </div>
                        <button
                            className='modal-close-btn'
                            onClick={() => { this.handleClickClose() }}
                        >
                            Tutup
            </button>
                    </div>
                </div>
            );
        }

        return (
            <div className='lesson-card'>
                <div
                    className='lesson-item'
                    onClick={() => { this.handleClickLesson() }}
                >
                    {/* Memasukkan nilai props name */}
                    <p style={{ marginBottom: '30px', fontSize: '20px' }}>{this.props.name}</p>
                    {/* Menentukan nilai src pada img */}
                    <img src={this.props.image} alt={this.props.name} />
                </div>
                {/* Siapkan modalnya */}
                {modal}
            </div>
        )
    }
}