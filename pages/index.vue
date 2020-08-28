<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-box">
          <div class="row">
            <div class="col-xl-12">
              <div class="header-text text-center">
                <img src="../assets/circle.jpg" alt="" class="img-circle" />
                <h2>Very top Admin</h2>
                <p>I'm front-end developer</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center col-md-offset-1">
              <div class="introduce">
                <h2 class="title">Personal Details</h2>
                <p>
                  Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                  вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                  текстов на латинице с начала XVI века. В то время некий
                  безымянный печатник создал большую коллекцию размеров и форм
                  шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem
                  Ipsum не только успешно пережил без заметных изменений пять
                  веков, но и перешагнул в электронный дизайн. Его популяризации
                  в новое время послужили публикация листов Letraset с образцами
                  Lorem Ipsum в 60-х годах и, в более недавнее время, программы
                  электронной вёрстки типа Aldus PageMaker, в шаблонах которых
                  используется Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.card-box {
  background-color: #fff;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 30px;
}
.header-text img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.introduce h2 {
  margin-bottom: 20px;
  letter-spacing: 0.03em;
  font-size: 20px;
}
.introduce p {
  margin-bottom: 20px;
  line-height: 26px;
  letter-spacing: 0.5px;
}
.presonal-inform {
  padding-top: 30px;
  line-height: 30px;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
</style>
