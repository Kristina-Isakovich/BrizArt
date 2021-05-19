import telephone from 'img/icons/telephone.png'
import telegram from 'img/icons/telegram.png'
import viber from 'img/icons/viber.png'
import mail from 'img/icons/mail.png'

interface IContacts {
  img: string,
  title: string,
  link: string,
}

export const contacts: Array<IContacts> = [
  {
    img: telephone,
    title: '+375 29 7130942',
    link: 'tel:+375297130942',
  },
  {
    img: telegram,
    title: '@BrizArt_grills',
    link: 'tg://resolve?domain=BrizArt_grills',
  },
  {
    img: viber,
    title: '+375 29 7130942',
    link: 'viber://chat?number=%2B375297130942',
  },
  {
    img: mail,
    title: 'info@brizart.by',
    link: 'mailto:info@brizart.by',
  },
]
