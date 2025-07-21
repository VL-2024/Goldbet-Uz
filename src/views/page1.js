import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import ContentList1 from '../components/content-list1'
import Footer15 from '../components/footer15'
import './page1.css'

const Page1 = (props) => {
  return (
    <div className="page1-container">
      <Helmet>
        <title>Page1 - Obedient Sour Jellyfish</title>
        <meta property="og:title" content="Page1 - Obedient Sour Jellyfish" />
      </Helmet>
      <Navbar3
        link1={
          <Fragment>
            <span className="page1-text10">О нас</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="page1-text11">Указы и документы</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="page1-text12">Получение лицензии</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="page1-text13">Portfolio</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="page1-text14">Контакты</span>
          </Fragment>
        }
        logoSrc={`${process.env.PUBLIC_URL}/logo_gb_uz-1500h.png`}

        link5Url="#Footer15"
      ></Navbar3>
      <ContentList1
        text={
          <Fragment>
            <span className="page1-text15">
              <span>Порядок получения лицензии на лотерейную деятельность</span>
              <br></br>
              <span>
                В соответствии с Указом Президента Республики Узбекистан Шавката
                Мирзиёева № УП-68 от 19 апреля 2024 года, в стране введены
                обновлённые правила регулирования и лицензирования лотерейной
                деятельности. Целью указа является повышение прозрачности,
                обеспечение честности и развитие цифровых форматов в сфере
                лотерей.
              </span>
              <br></br>
              <br></br>
              <span>Кто может получить лицензию?</span>
              <br></br>
              <span>
                Лицензию на осуществление лотерейной деятельности могут
                получить:
              </span>
              <br></br>
              <br></br>
              <span>юридические лица, зарегистрированные в Узбекистане;</span>
              <br></br>
              <br></br>
              <span>
                компании, соответствующие требованиям по уставному капиталу,
                технической оснащённости и программному обеспечению;
              </span>
              <br></br>
              <br></br>
              <span>
                организации, предоставляющие гарантии по выплате выигрышей.
              </span>
              <br></br>
              <br></br>
              <span>Основные этапы получения лицензии:</span>
              <br></br>
              <span>Подача заявления в уполномоченный орган</span>
              <br></br>
              <br></br>
              <span>
                Через Единый портал интерактивных государственных услуг
                (my.gov.uz);
              </span>
              <br></br>
              <br></br>
              <span>
                Либо напрямую в Агентство по развитию электронного правительства
                и цифровой экономики при Министерстве цифровых технологий.
              </span>
              <br></br>
              <br></br>
              <span>Предоставление пакета документов</span>
              <br></br>
              <br></br>
              <span>Учредительные документы;</span>
              <br></br>
              <br></br>
              <span>Бизнес-план;</span>
              <br></br>
              <br></br>
              <span>
                Документы, подтверждающие наличие технических средств и систем
                учёта;
              </span>
              <br></br>
              <br></br>
              <span>Проект регламента проведения лотереи.</span>
              <br></br>
              <br></br>
              <span>Экспертиза и проверка</span>
              <br></br>
              <br></br>
              <span>
                Уполномоченные органы проводят анализ представленных материалов,
                включая программное обеспечение, обеспечивающее прозрачность и
                защиту данных игроков.
              </span>
              <br></br>
              <br></br>
              <span>Получение лицензии</span>
              <br></br>
              <br></br>
              <span>
                При положительном заключении лицензия выдается сроком на 5 лет;
              </span>
              <br></br>
              <br></br>
              <span>
                Регистрация лотерейного продукта в государственном реестре
                обязательна.
              </span>
              <br></br>
              <br></br>
              <span>Требования к деятельности</span>
              <br></br>
              <br></br>
              <span>
                Проведение лотерей допускается только в электронной форме (в
                онлайн-режиме);
              </span>
              <br></br>
              <br></br>
              <span>
                Применение сертифицированных ГСЧ (генераторов случайных чисел);
              </span>
              <br></br>
              <br></br>
              <span>
                Предоставление регулярной отчётности в налоговые и регулирующие
                органы.
              </span>
              <br></br>
              <br></br>
              <span>Дополнительные положения:</span>
              <br></br>
              <span>
                Контроль за деятельностью лотерейных операторов осуществляется в
                режиме онлайн в рамках единой системы мониторинга.
              </span>
              <br></br>
              <br></br>
              <span>
                За нарушение установленных правил предусмотрена административная
                и уголовная ответственность, включая отзыв лицензии.
              </span>
              <br></br>
              <br></br>
              <span>
                📌 Важно: Только лицензированные компании имеют право
                распространять лотерейные билеты, принимать участие в
                организованных розыгрышах и рекламировать лотерейные продукты.
              </span>
              <br></br>
              <br></br>
              <span>
                📥 Подать заявку на получение лицензии и ознакомиться с полным
                текстом Указа № УП-68 можно на сайте my.gov.uz.
              </span>
            </span>
          </Fragment>
        }
      ></ContentList1>
      <hr className="page1-separator1"></hr>
      <hr className="page1-separator2"></hr>
      <Footer15
        action1={
          <Fragment>
            <span className="page1-text100">Contact Us</span>
          </Fragment>
        }
        logoSrc={`${process.env.PUBLIC_URL}/logo_gb_uz-1500h.png`}

        content1={
          <Fragment>
            <span className="page1-text101">
              Если у вас есть вопросы, напишите нам
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="page1-text102">
              Оставайтесь с нами на связи в социальных сетях
            </span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="page1-text103">
              © 2019-2025. All Rights Reserved
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="page1-text104">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="page1-text105">Cookies</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="page1-text106">Privacy Policy</span>
          </Fragment>
        }
      ></Footer15>
    </div>
  )
}

export default Page1
