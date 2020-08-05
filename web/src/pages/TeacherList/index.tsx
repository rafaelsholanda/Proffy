import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="subject">Dia da Semana</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/30013234?s=460&v=4" alt="Rafael Holanda"/>
            <div>
              <strong>Rafael Holanda</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
           Sou engenheiro de produção de formação. 
           <br /><br />
           Atualmente trabalho como técnico de operação off-shore na Petrobras. Sou aficionado por programação e tecnologia e pretendo me especializar e me desenvolver nessa área.
          </p>

          <footer>
            <p>
              Preço/Hora
              <strong>R$ 30,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="WhatsApp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  )
}

export default TeacherList;