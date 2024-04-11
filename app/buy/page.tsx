import styles from "./styles.module.css";

export default function Buy() {
  return (
    <div className={styles.buy}>
      <h2>Доставка</h2>
      <h3>МЫ ОТПРАВЛЯЕМ НАШИ ИЗДЕЛИЯ ПО РОССИИ И ВСЕМУ МИРУ</h3>
      <ul>По территории Российской Федерации:</ul>
      <li>
        Доставка по Москве и Московской области до ПВЗ (СДЭК) - 350 рублей
      </li>
      <li>
        Доставка в другие города России до ПВЗ (служба доставки СДЭК)- 350
        рублей{" "}
      </li>
      <li>
        Доставка курьером до двери в другие города (служба доставки СДЭК) - 420
        рублей
      </li>
      <li>
        Почта России (Москва, Московская область, другие города России) - 350
        рублей{" "}
      </li>
      <ul>Страны СНГ:</ul>
      <li>
        Пункт выдачи СДЕК в странах СНГ (Беларусь, Армения, Киргизия, Казахстан)
        - от 450 рублей (сроки и стоимость доставки рассчитываются отдельно
        согласно тарифам СДЭК)
      </li>
      <ul>По всему миру:</ul>
      <li>
        Почтой России/EMS по миру от 1350 рублей (сроки и стоимость доставки
        рассчитываются отдельно согласно тарифам Почты России)
      </li>
      <h2>Сроки оформления заказа</h2>
      <p>На нашем сайте размещена только продукция, которая есть в наличии.</p>
      <p>После оплаты, мы отправляем Ваш заказ в течении 1-3х рабочих дней.</p>
      <h2>Обмен и возврат</h2>
      <p>
        Если вам не подошел размер изделия, и вы хотите обменять товар, напишите
        нам на mikiniki-shop@yandex.ru и мы произведем обмен, если нужный размер
        есть в наличии.{" "}
      </p>
      <p>
        Если же по какой-то причине вам не подошли изделия, и вы хотите сделать
        возврат, напишите нам на mikiniki-shop@yandex.ru с номером заказа и мы
        произведем возврат (при условии, что товар надлежащего качества и вида и
        с момента получения товара прошло не более 14 дней.) <br />
        Оплату за пересылку товара на возврат покупатель берет на себя.
      </p>
      <h2>Оплата</h2>
      <p>
        Оплата заказа производится банковской картой на нашем сайте (VISA,
        MASTERCARD, МИР), через Tinkoff Pay, SberPay, Mir Pay, СБП на сайте, в
        мессенджерах, в соцсетях, по e-mail и СМС.
      </p>
      <p>
        Проведение платежей по банковским картам осуществляется в строгом
        соответствии с требованиями платежных систем.
      </p>
      <p>Мы получаем информацию только о совершенном Вами платеже.</p>
    </div>
  );
}
