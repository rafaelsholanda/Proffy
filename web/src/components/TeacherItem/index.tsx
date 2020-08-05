import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
  return (
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
  );
}

export default TeacherItem;