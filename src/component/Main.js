import React from 'react'
import Kelas from './Kelas'
import Login from './Login'
import Daftar from './Daftar'
import { Route } from 'react-router-dom'
import DataScience from './img/dataScience.svg'
import Web from './img/web.svg'
import Mobile from './img/mobile.svg'
import DevOps from './img/devOps.svg'


function Lesson() {
    const lessonList = [
        {
            name: 'Data Science',
            image: DataScience,
            introduction: "Data Science suatu disiplin ilmu yang khusus mempelajari data, khususnya data kuantitatif, baik yang terstruktur maupun tidak terstruktur"
        },
        {
            name: 'Web Developer',
            image: Web,
            introduction: "Web Developer adalah Pengembang Web yang bekerja untuk merancang, membuat, dan memelihara situs web dan aplikasi web"
        },
        {
            name: 'Mobile Apps',
            image: Mobile,
            introduction: "Mobile Apps adalah bidang programming terlatih yang peran utamanya membuat aplikasi pada ponsel pintar"
        },
        {
            name: 'DevOps',
            image: DevOps,
            introduction: "DevOps adalah serangkaian praktik yang mengotomatiskan proses antara pengembangan aplikasi dan tim pengembang agar mereka dapat melakukan proses build, test dan release perangkat lunak lebih cepat dan lebih handal"
        },
    ];
    return (
        <>
            <div className='container'>
                <h1>Become a professional programmer<br />with GoCode</h1>
                <h2>From bootcamp to hero</h2>
            </div>
            <div className='class-container'>
                <h3 className='section-title'><strong> Learning Path</strong></h3>
                {/* Menggunakan map untuk menampilkan lesson list */}
                {lessonList.map((item) => {
                    return (
                        <Kelas
                            name={item.name}
                            image={item.image}
                            // Meneruskan props introduction ke component Kelas
                            introduction={item.introduction}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default class Main extends React.Component {
    render() {
        return (
            <div className='main'>
                <Route path='/' exact component={Lesson} />
                <Route path='/daftar' exact component={Daftar} />
                <Route path='/login' exact component={Login} />
            </div>
        )
    }
}


