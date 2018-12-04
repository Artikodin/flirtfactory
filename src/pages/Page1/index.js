import React from "react";
import PropTypes from "prop-types";

import { Page, ScrollHandler } from "../../components";

const Page1 = ({ history }) => {
  const pushInHistory = () => {
    console.log("yolo");
    history.push("/page2");
  };
  const handleLog = () => {
    console.log("log");
  };
  return (
    <Page backgroundColor="purple">
      <ScrollHandler onScrollBottom={handleLog} />
      <h1>page1</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit ante,
        eleifend ac scelerisque nec, dignissim eu ex. Duis molestie pellentesque
        erat in eleifend. Pellentesque non vehicula urna. Sed aliquet
        sollicitudin ipsum vel efficitur. Nullam hendrerit dolor sed ultrices
        rutrum. In ante justo, interdum eu bibendum eu, suscipit id mauris. In
        fermentum justo non erat consectetur, eget imperdiet elit scelerisque.
        Donec pellentesque faucibus ipsum ac pellentesque. Curabitur euismod
        lacus eu nibh rhoncus ultrices. Nulla faucibus volutpat dolor, sed
        molestie sapien tempus vel. Suspendisse massa massa, semper et risus sit
        amet, dictum maximus lacus. Cras in interdum turpis, non congue massa.
        Sed ultrices purus et tellus pulvinar, at dictum odio interdum.
        Vestibulum vitae ultrices mi. Proin accumsan ex ac lacus interdum
        rutrum. Maecenas semper eleifend sapien ut ornare. Vivamus finibus,
        magna ultrices sodales bibendum, nisi orci malesuada odio, eget
        condimentum velit lectus nec risus. Nunc et dui congue nunc euismod
        pretium. Duis eu pellentesque lectus. Integer feugiat augue felis, non
        mollis risus efficitur vitae. Vestibulum ac arcu eget ante suscipit
        hendrerit. Sed posuere tincidunt dolor a vestibulum. Nulla erat nunc,
        feugiat nec ipsum ut, maximus ornare metus. Praesent lobortis dui a
        commodo efficitur. Praesent eget suscipit ante, vel laoreet turpis.
        Proin at ipsum id metus euismod hendrerit tincidunt eget urna. Vivamus
        pretium, quam ac mollis rhoncus, tortor risus congue nibh, ac faucibus
        leo libero sit amet lectus. Proin at auctor lectus. Sed aliquam lectus
        in sollicitudin vulputate. Aliquam lobortis tellus quis libero cursus
        pretium. Fusce ultrices ut leo at consectetur. Vivamus porta euismod
        odio, et efficitur sem imperdiet at. Aliquam erat volutpat. Sed nec
        semper tortor, ut porta odio. Nulla efficitur justo eget orci convallis
        interdum. Proin rutrum erat eget sapien aliquam cursus. Integer tempus
        dapibus semper. Sed euismod, diam et efficitur bibendum, nulla lectus
        ullamcorper odio, a tempor ex dolor eu nunc. Vivamus magna nulla,
        pretium in facilisis eu, mattis in tellus. Vivamus ut bibendum justo, at
        sodales mi. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Nunc efficitur posuere lacus eu
        pellentesque. Praesent in quam arcu. In hac habitasse platea dictumst.
        Phasellus magna diam, molestie at fringilla sit amet, mollis id elit.
        Donec ligula nisl, malesuada ac sapien vitae, condimentum auctor felis.
        Vivamus gravida dolor non convallis accumsan. Vestibulum ullamcorper,
        est vitae placerat iaculis, eros libero consectetur nulla, ut sagittis
        metus velit vel sapien. Pellentesque habitant morbi tristique senectus
        et netus et malesuada fames ac turpis egestas. Integer elit sapien,
        scelerisque sed nisl non, sodales scelerisque dolor. Sed ultrices ipsum
        id eros lacinia volutpat. Integer a eleifend dolor. Aliquam dignissim,
        nisi ac interdum consectetur, neque metus sollicitudin arcu, non ornare
        mauris felis sed ipsum. Sed in auctor felis. Maecenas id sagittis nulla,
        vitae efficitur sapien. Nunc erat quam, aliquam vel urna sed, tincidunt
        tristique enim. Etiam quis libero eget orci sagittis volutpat a id elit.
        Mauris in lacus eget nunc iaculis luctus nec vel velit. Ut venenatis
        gravida ultrices. Mauris et nisi mattis, tempus mi tristique, accumsan
        ipsum. Nunc nisi lectus, vestibulum sed quam id, feugiat volutpat eros.
        Curabitur pretium velit non ex ornare imperdiet. Vestibulum non libero
        tortor. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Sed nec facilisis magna, eget ultrices tortor.
        Cras felis urna, iaculis nec ornare vitae, tempus non dolor. Aliquam
        accumsan et ligula ut tempor. Fusce euismod nisl est, non tristique
        risus eleifend in. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Curabitur sed varius nisl.
        Nam lacinia est eu nisl dignissim, lobortis mattis tortor volutpat.
        Phasellus at massa magna. Mauris consequat lorem eu diam hendrerit
        ullamcorper. Integer vestibulum posuere luctus. Morbi rhoncus, turpis
        porttitor placerat pulvinar, velit neque volutpat nulla, ut fermentum
        ante eros quis tellus. Fusce vel facilisis justo. Vestibulum non mi
        risus. In id turpis quis mauris condimentum sollicitudin. Vestibulum
        lobortis commodo sagittis. Suspendisse potenti. Sed ullamcorper, lacus
        eu maximus varius, augue ligula posuere nisi, mollis faucibus lorem enim
        ac odio. Pellentesque id velit et erat gravida varius. Phasellus vel
        augue condimentum, blandit orci id, pretium augue. Aenean at molestie
        est. Proin euismod neque id hendrerit tincidunt. Phasellus aliquet arcu
        sed nibh ultricies, ultricies tempus felis tincidunt. Aenean justo elit,
        vulputate in pretium cursus, rutrum eu enim. Nulla tristique mauris non
        arcu convallis gravida. Ut semper euismod fermentum. Vivamus vitae
        fringilla mi, vitae gravida purus. Ut tincidunt nulla sit amet odio
        finibus, nec tempor quam ullamcorper. Quisque et eleifend enim. Donec
        vitae gravida libero. Donec a metus eget augue accumsan euismod.
        Phasellus volutpat, quam sodales lobortis viverra, ante turpis porttitor
        quam, euismod lobortis ex urna sed purus. Cras efficitur vestibulum
        elementum. Ut dictum tellus nec auctor mattis. Suspendisse potenti.
        Morbi nunc turpis, consectetur vitae cursus at, mollis quis nisi. Mauris
        sed risus felis. Donec sit amet orci sagittis, pretium nunc vitae,
        ultricies lacus. Sed pretium urna nunc, id sollicitudin metus sodales
        non. Integer ultrices velit tempus magna ultrices porta. Donec dui nisl,
        sodales ut quam nec, blandit luctus arcu. Morbi volutpat magna ut
        venenatis hendrerit. Sed accumsan posuere ex a ullamcorper. Nam auctor
        malesuada eros, vel varius urna suscipit id. Ut porta dui enim, eu
        fermentum metus pretium id. Quisque nunc mi, tincidunt pretium tincidunt
        et, dictum sed quam. Phasellus vestibulum lectus turpis, eu posuere
        dolor ultrices sodales. Sed quis aliquam nisi. Praesent eros ligula,
        ultricies vitae elit eu, bibendum gravida nunc. Mauris convallis
        hendrerit ipsum, vel imperdiet sapien vulputate ut
      </p>
      <button type="button" onClick={pushInHistory}>
        to page 2
      </button>
    </Page>
  );
};

Page1.propTypes = {
  history: PropTypes.object.isRequired
};

export default Page1;
