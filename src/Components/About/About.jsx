import React from 'react'
import './About.css'
import about_img from '../../assets/teploblok-foto.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className='about-right'>
        <h3>О нас</h3>
        <h2>Наши продукты</h2>
        <h3>Теплоблок. Почему сейчас строят из теплоблока?</h3>
        <p>1. Небольшой вес. 85% всего объема газобетонного блока – это поры воздуха, поэтому вес его достигает всего 18 кг.

2. Удобные размеры. Крупный блок имеет параметры 600х300х200.

3. Пожаробезопасный. Выдерживает воздействие прямого огня в течение трех часов.

4. Высокая звукоизоляция. Блокирует шум до 55 дБ.

5. Простая система монтажа. Легко поддается распилу и штробу.

6. Экологичен. Производится из натуральных, природных материалов.

7. Паропроницаемость. Отвечает за чистоту воздуха в вашем доме.

8. Теплопроводимость. Сохраняет тепло в помещении зимой, а летом создает приятную прохладу.</p>
<h3>Что такое теплоблок?
 </h3>
          <p>При возведении жилого дома, любой застройщик тщательно подходит к выбору строительного материала. Очень важно, чтобы он был прочным, надежным, недорогим, хорошо сохранял тепло в помещении, а также имел привлекательный вид. Все эти требования, удачно сошлись в строительном материале, под названием – теплоблок или как ещё его принято называть – автоклавный газоблок.

 

Он имеет высокие показатели прочности, долговечен, отлично сохраняет тепло и ломает стереотип «дешево, но сердито», доказывая обратное. Стоимость теплоблока позволяет сэкономить на строительстве, при этом получая очень качественный материал.



Купить теплоблоки в Казахстане предлагает наша компания ТОО “ADIN”.  Мы являемся производителями теплоблоков в Алматы и полностью отвечаем за качество своей продукции. Наши теплоблоки производятся на основе цемента, кварцевого песка, извести и воды. На выходе получается материал с большим количеством пор, размером до 3 мм. Теплоблоки являются разновидностью ячеистого бетона.





 Производство теплоблоков Алматы предусматривает смешивание всех составляющих (песка, извести, цемента) с водой, для запуска химической реакции и создания пористой структуры, с этой целью добавляется алюминиевая пудра. Вся бетонная смесь тщательно перемешивается, заливается в формы, и отправляется в специальные автоклавные печи. Под действием высоких температур и давления на протяжении 1-2 часов, материал твердеет и формирует надежную бетонную структуру, 80% которой составляют поры.



Характеристики теплоблока избавляют вас от дополнительной работы, все, что вам останется после строительства – это пролевкасить дом по своему вкусу и можно заселяться!



Теплоблоки стоимость Алматы вас приятно порадует! Предлагаем доступный и качественный материал с гарантией. Выбирайте только лучшие строительные материалы для вашего дома! Остались вопросы: Теплоблок цена за куб?  Сколько стоит теплоблок? Ответ: Позвоните прямо сейчас! И мы вам сделаем скидку!</p>
          <h3>Так же мы предлагаем качественную матовую и глянцевую металлочерепицу в Алматы.
Производство Россия и Корея. Недорого!</h3>
          <p></p>
      </div>
    </div>
  )
}

export default About
