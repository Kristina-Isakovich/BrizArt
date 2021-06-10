// @ts-ignore
import News_1 from 'img/news/News_1.png'
// @ts-ignore
import News_2 from 'img/news/News_2.png'

export interface INews {
    id: string,
    title: string,
    img: string,
    text: string,
}

export const news: Array<INews> = [
  {
    id: '1',
    title: 'кухонная вытяжка в современной квартире',
    img: News_1,
    text: 'Специальная кухонная вытяжка уже давно стала обязательным атрибутом кухни современной квартиры.' +
            ' Особенно если там поработали дизайнеры. Несмотря на всю логичность такого решения, установка кухонной' +
            ' вытяжки связана с рядом вопросов',
  },
  {
    id: '2',
    title: 'Правильный воздухообмен в квартире и доме',
    img: News_2,
    text: 'Eсть в нашей практике яркий случай, характеризующий понимание вентиляции владельцев квартир и домов.' +
            ' владелица одной квартиры заявила, что у нее не работает вентиляция в новой квартире. Выяснила она это,' +
            ' приложив листок бумаги к решетке',
  },
  {
    id: '3',
    title: 'Lorem ipsum dolor sit amet',
    img: News_2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur culpa eligendi iure' +
            ' natus odit perferendis quaerat rem vitae? Alias atque aut esse harum id laudantium quibusdam quisquam' +
            ' reiciendis. Velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur' +
            ' culpa eligendi iure natus odit perferendis quaerat rem vitae? Alias atque aut esse harum id laudantium' +
            ' quibusdam quisquam reiciendis. Velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
            ' Aperiam consequuntur culpa eligendi iure natus odit perferendis quaerat rem vitae? Alias atque aut' +
            ' esse harum id laudantium quibusdam quisquam reiciendis. Velit.',
  },
]
