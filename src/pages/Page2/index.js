import React from "react";
import { Link } from "react-router-dom";

import { Page, Drawer, ScrollHandler } from "../../components";

class Page2 extends React.Component {
  state = {
    showed: false
  };

  handleClick = () => {
    const { showed } = this.state;
    // const showed = this.state.showed;
    this.setState({
      showed: !showed
    });
  };

  handleLog = () => {
    console.log("log");
  };

  render() {
    const { showed } = this.state;
    return (
      <Page backgroundColor="pink">
        <ScrollHandler onScrollBottom={this.handleLog} />
        <h1>page2</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          accumsan, mauris nec mattis vehicula, erat urna lacinia lorem, eget
          porta sem velit at quam. Ut nec metus ut sapien iaculis vestibulum id
          at leo. In tristique eu ligula sed commodo. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Pellentesque augue sapien,
          lacinia sed tristique sollicitudin, tempus nec ligula. Donec convallis
          ex sit amet vestibulum varius. Donec vitae tincidunt dolor. Aenean
          faucibus ante velit, sed consequat libero sodales vel. Nulla facilisi.
          Sed neque eros, varius non dui semper, dictum dignissim arcu. Fusce
          vel blandit nulla. Proin ac augue rhoncus, molestie lectus ac,
          dignissim est. Nam vehicula justo quam, a mattis mauris dignissim id.
          Proin tincidunt erat in mi tincidunt efficitur. Donec justo enim,
          tempor quis tincidunt at, luctus nec lorem. Nulla leo purus, auctor ut
          aliquam a, aliquet at tortor. Phasellus blandit ultrices enim, cursus
          varius lorem finibus sed. Proin ultrices elit eget risus viverra, eu
          volutpat est lacinia. Etiam vel risus semper, eleifend risus vitae,
          mollis sapien. Donec pretium libero ac nibh eleifend porttitor et
          dictum neque. Nunc et arcu non diam sodales bibendum dictum a mi.
          Nullam maximus turpis in odio gravida mattis. Pellentesque ornare
          tincidunt consequat. In volutpat ac nulla sit amet porta. Aliquam odio
          nibh, efficitur id posuere sit amet, ultricies sit amet felis.
          Vestibulum eget sem sed lacus ultricies congue sit amet in est. Ut
          vulputate gravida odio, non consectetur ante feugiat quis. Nullam
          posuere egestas justo, eu scelerisque nulla aliquet tempor. Duis id
          turpis id nulla malesuada ultricies eu et turpis. Maecenas eleifend
          leo eu sem placerat, in auctor lectus blandit. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Praesent dapibus est a odio fermentum mollis. Sed ultrices,
          orci ut sollicitudin varius, leo lorem tempor dui, a posuere ligula
          nisl vel est. Fusce nec nunc magna. Maecenas id sapien finibus, mattis
          augue sit amet, sollicitudin erat. Pellentesque lacinia est nisl.
          Aenean lobortis consequat varius. Integer varius mauris id neque
          bibendum facilisis. Aliquam quis enim ultrices, molestie turpis et,
          imperdiet diam. Proin placerat mollis orci, eu tempus dui pulvinar
          vel. Sed bibendum, tellus at suscipit molestie, eros ante luctus nisi,
          in commodo dui augue vel dolor. Ut quam turpis, ultricies in neque
          sed, pretium vulputate turpis. Quisque ac libero imperdiet, mattis
          nisl sit amet, tincidunt diam. Cras finibus sit amet mauris non
          volutpat. Sed suscipit id nunc id facilisis. In hendrerit finibus nibh
          nec dapibus. Sed bibendum nunc at lacinia pulvinar. Nam tempus tempus
          fringilla. Pellentesque placerat libero vitae venenatis scelerisque.
          In imperdiet a elit quis finibus. Pellentesque ornare venenatis lectus
          at scelerisque. Suspendisse sed sem id odio porttitor finibus. Duis
          sit amet orci id justo tempus facilisis. Fusce malesuada dui felis, ac
          vulputate mauris laoreet non. Donec ac vulputate dui, a ullamcorper
          ligula. Donec sed malesuada augue, et cursus nisl. Mauris consectetur,
          sem eget fringilla congue, purus diam varius eros, et ullamcorper est
          leo ut mi. Nulla gravida non justo sit amet sagittis. Nunc viverra
          erat vel volutpat venenatis. Praesent tincidunt tortor diam, non
          viverra velit accumsan vel. Proin auctor arcu turpis, id semper diam
          malesuada sit amet.
        </p>
        <button type="button" onClick={this.handleClick}>
          click
        </button>
        <Drawer showed={showed} />
        <Link to="/page3">to page 3</Link>
      </Page>
    );
  }
}

export default Page2;
