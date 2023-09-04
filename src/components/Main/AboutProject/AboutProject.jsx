import React from 'react'

const AboutProject = ({ scroll }) => {
    return (
        <section ref={scroll} id='about' className='about section section_type_landing'>
            <h2 className='title title_margin_more'>О проекте</h2>
            <ul className='about__list'>
                <li className='about__item'>
                    <h3 className='about__subtitle'>Дипломный проект включал 5 этапов</h3>
                    <p className='about__paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className='about__item'>
                    <h3 className='about__subtitle'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about__paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <ul className='about__path'>
                <li className='about__step about__step_type_backend'>
                    <h4 className='about__weeks about__weeks_type_backend'>1 неделя</h4>
                    <p className='about__tag'>Back-end</p>
                </li>
                <li className='about__step about__step_type_frontend'>
                    <h4 className='about__weeks about__weeks_type_frontend'>4 недели</h4>
                    <p className='about__tag'>Front-end</p>
                </li>
            </ul>
        </section>
    )
}

export default AboutProject