import telephone from 'img/icons/telephone.svg'
import telegram from 'img/icons/telegram.svg'
import viber from 'img/icons/viber.svg'
import mail from 'img/icons/mail.svg'

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
