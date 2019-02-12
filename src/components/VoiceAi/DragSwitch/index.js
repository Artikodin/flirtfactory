import React from "react";
import PropTypes from "prop-types";

class DragSwitch extends React.Component {
  path = React.createRef();

  svgRef = React.createRef();

  dragCircle = React.createRef();

  state = {
    elStart: {
      x: 0,
      y: 0
    },
    elCenter: {
      x: 0,
      y: 0
    },
    elEnd: {
      x: 0,
      y: 0
    }
  };

  deltaDrag = 0;

  goToEnd = false;

  goToStart = false;

  once = false;

  static propTypes = {
    handleDragStart: PropTypes.func,
    onAnswer: PropTypes.func,
    onHangUp: PropTypes.func,
    isVisible: PropTypes.bool
  };

  static defaultProps = {
    handleDragStart: () => {},
    onAnswer: () => {},
    onHangUp: () => {},
    isVisible: true
  };

  componentDidMount() {
    this.setState({
      elStart: {
        x: this.coordValueAlongPath("x", 0),
        y: this.coordValueAlongPath("y", 0)
      },
      elCenter: {
        x: this.coordValueAlongPath("x", 0.5),
        y: this.coordValueAlongPath("y", 0.5)
      },
      elEnd: {
        x: this.coordValueAlongPath("x", 1),
        y: this.coordValueAlongPath("y", 1)
      }
    });

    this.svgRef.current.addEventListener("mouseup", this.handleDragEnd, {
      passive: true
    });
  }

  componentWillUnmount() {
    this.svgRef.current.removeEventListener("mouseup", this.handleDragEnd, {
      passive: true
    });
    cancelAnimationFrame(this.moveStar);
  }

  mathSquare = number => number ** 2;

  distanceBtwPoints = (xCurve, yCurve, xCursor, yCursor) =>
    Math.sqrt(
      this.mathSquare(xCurve - xCursor) + this.mathSquare(yCurve - yCursor)
    );

  easing = (startValue, endValue, ease) =>
    startValue + (endValue - startValue) * ease;

  auMillieme = nombre => Math.round(1000 * nombre) / 1000;

  /**
   *
   * Get a coordinate value in the path at a specific position
   *
   * @param {string} coordinate - The coordinate you want to get the value.
   * @param {number} positionInThePath - The position in the path, this position is between 0 & 1 both include.
   * @param {number} [distanceFromTheOrigin=0]  - [Optional] Difference between the element at start position on the path and the top left origin.
   *
   * @returns {number} - Value of a coordinate at a specific position in the path.
   *
   */
  coordValueAlongPath = (
    coordinate,
    positionInThePath,
    distanceFromTheOrigin = 0
  ) => {
    const pathTotalLength = this.path.current.getTotalLength();
    return (
      this.path.current.getPointAtLength(positionInThePath * pathTotalLength)[
        coordinate
      ] +
      -1 * distanceFromTheOrigin
    );
  };

  handleMouseMove = e => {
    const { elStart, elCenter, elEnd } = this.state;

    const mousePosinSvgElement = {
      x: e.clientX - this.svgRef.current.getBoundingClientRect().x,
      y: e.clientY - this.svgRef.current.getBoundingClientRect().y
    };

    const distanceCursorFromOrigine = this.distanceBtwPoints(
      elStart.x,
      elStart.y,
      mousePosinSvgElement.x,
      mousePosinSvgElement.y
    );

    const distanceCursorFromEnd = this.distanceBtwPoints(
      elEnd.x,
      elEnd.y,
      mousePosinSvgElement.x,
      mousePosinSvgElement.y
    );

    this.deltaDrag =
      distanceCursorFromOrigine /
      (distanceCursorFromOrigine + distanceCursorFromEnd);

    const dragElementPos = {
      x: this.coordValueAlongPath("x", this.deltaDrag, elCenter.x),
      y: this.coordValueAlongPath("y", this.deltaDrag, elCenter.y)
    };

    this.dragCircle.current.style.transform = `
      translate3d(
        ${dragElementPos.x}px,
        ${dragElementPos.y}px,
        0
      )
    `;

    if (this.deltaDrag > 0.9) {
      this.goToEnd = true;
      this.handleDragEnd();
    } else if (this.deltaDrag < 0.1) {
      this.goToStart = true;
      this.handleDragEnd();
    }
  };

  handleDragStart = () => {
    const { handleDragStart } = this.props;
    handleDragStart();
    this.svgRef.current.addEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
  };

  handleDragEnd = () => {
    this.svgRef.current.removeEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
    this.moveStar();
  };

  handleAnswer = () => {
    const { onAnswer } = this.props;
    onAnswer();
    setTimeout(() => {
      this.once = false;
    }, 200);
  };

  handleHangUp = () => {
    const { onHangUp } = this.props;
    onHangUp();
    setTimeout(() => {
      this.once = false;
    }, 200);
  };

  moveStar = () => {
    const { elCenter } = this.state;

    const ease = 0.07;

    if (this.goToEnd) {
      this.deltaDrag =
        this.deltaDrag < 1 ? this.easing(this.deltaDrag, 1.1, ease) : 1;
    } else if (this.goToStart) {
      this.deltaDrag =
        this.deltaDrag > 0 ? this.easing(this.deltaDrag, -0.1, ease) : 0;
    } else {
      this.deltaDrag = this.easing(this.deltaDrag, 0.5, ease);
    }

    const elementPos = {
      x: this.coordValueAlongPath("x", this.deltaDrag, elCenter.x),
      y: this.coordValueAlongPath("y", this.deltaDrag, elCenter.y)
    };

    this.dragCircle.current.style.transform = `
      translate3d(
        ${elementPos.x}px,
        ${elementPos.y}px,
        0
      )
    `;

    if (
      this.auMillieme(this.deltaDrag) !== 1 &&
      this.auMillieme(this.deltaDrag) !== 0 &&
      this.auMillieme(this.deltaDrag) !== 0.5
    ) {
      requestAnimationFrame(this.moveStar);
    }

    if (this.auMillieme(this.deltaDrag) === 1 && !this.once) {
      this.handleAnswer();
      this.once = true;
    }
    if (this.auMillieme(this.deltaDrag) === 0 && !this.once) {
      this.handleHangUp();
      this.once = true;
    }
  };

  render() {
    const { elCenter } = this.state;
    const { isVisible } = this.props;

    const btnPhonePos = {
      x: -0.1 + elCenter.x,
      y: 16 + elCenter.y
    };

    return (
      <>
        {isVisible && (
          <svg
            key="svg"
            ref={this.svgRef}
            version="1.1"
            baseProfile="full"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={this.path}
              d="M 23 22 L 278 22" // 8
              fill="transparent"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="1 7"
            />

            <g fill="#FFFFFF" fillRule="nonzero" transform="translate(253,-3)">
              <path d="M17.623185,26.2636769 C18.413138,27.2421451 21.1779732,30.5502994 24.0822119,32.6237201 C26.0570943,34.0215318 27.6370001,34.5573596 27.8693392,34.6272502 C28.5895904,34.9301094 29.1936721,35 29.6815842,35 C30.2159641,35 30.5644728,34.9068126 30.6574084,34.8602188 C31.4705952,34.6272502 32.1443786,34.1147193 32.7716942,33.6254852 C33.5384132,33.0197668 34.1424948,32.4140484 34.6536409,31.80833 C34.9556817,31.4355802 35.0718512,31.0628304 34.9556817,30.6434869 L34.9092139,30.5968931 C34.5607052,29.781503 32.2605482,27.8012697 32.2373142,27.7779729 C31.8888056,27.4984105 31.540297,27.1955513 31.1453205,26.9392859 C30.9594492,26.8228016 30.7271101,26.6830204 30.4715371,26.6364267 C29.8906894,26.5432392 29.5421807,26.9392859 29.3098416,27.1955513 C29.2866077,27.2188482 29.2401399,27.2654419 29.216906,27.2887388 C29.0775025,27.42852 28.9148652,27.6148949 28.7522278,27.8012697 C28.4734209,28.1274258 27.915807,28.7797379 27.7299358,28.8496285 C27.4511288,28.8962222 26.382369,28.267207 25.8479891,27.8245666 C24.2448493,26.4966455 22.8275808,25.0755369 22.2234992,24.1902562 L22.2002653,24.1669593 C21.247675,22.7924445 21.1547393,22.373101 21.1779732,22.2799135 C21.247675,22.0702418 21.8982244,21.5111171 22.2234992,21.2315548 C22.4093704,21.0684767 22.5952417,20.9053987 22.7346452,20.7656175 C22.7578791,20.7423207 22.8043469,20.6957269 22.8275808,20.6724301 C23.0831538,20.4394615 23.4781303,20.0667117 23.3851946,19.4842901 C23.3387268,19.2280247 23.2225573,18.995056 23.0831538,18.8086811 C22.8275808,18.4126345 22.52554,18.0398847 22.2467331,17.7137286 C22.2002653,17.7137286 20.2253829,15.4073393 19.4121961,15.0578864 L19.3424944,15.0345896 C18.9475179,14.9414021 18.5525414,15.0345896 18.1807989,15.3374488 C17.5767172,15.8499797 16.9726356,16.4556981 16.3685539,17.2244945 C15.8574079,17.8535098 15.3694958,18.5291188 15.1371567,19.344509 C15.067455,19.5308839 14.7654141,20.6025395 15.3694958,22.1168355 C15.4624314,22.3963978 15.9735775,24.213553 17.623185,26.2636769 Z M16.0926574,19.6922356 L16.1157339,19.6460826 C16.3003456,18.9999414 16.7387986,18.3999531 17.1772516,17.8691943 C17.7541634,17.1538236 18.3079987,16.5999883 18.8618341,16.1384588 C18.9772164,16.0461529 19.0695223,16 19.1156753,16 C19.1156753,16 19.1387518,16 19.1387518,16 C19.5541283,16.2307647 20.8464107,17.5692001 21.5387049,18.3999531 C21.8156226,18.7230237 22.0925402,19.0460944 22.3002285,19.3922414 C22.3694579,19.5076238 22.4386873,19.5999297 22.4617638,19.6922356 C22.4848403,19.761465 22.3694579,19.8768474 22.1848461,20.0383827 C22.1386932,20.0845356 22.1156167,20.1076121 22.0694638,20.153765 C21.9540814,20.2691474 21.7925461,20.4076062 21.6079343,20.5691415 C20.9156401,21.1460534 20.4310342,21.6075828 20.2925754,22.0229593 C20.1310401,22.5306417 20.4541107,23.2690888 21.446399,24.6767536 L21.4694755,24.6998301 C22.2540755,25.8305773 23.984811,27.4459303 25.2540169,28.4843716 C25.2770934,28.5074481 27.0770583,29.9612658 27.9770407,29.6843482 C28.4154937,29.5458893 28.8539466,29.0612834 29.4308585,28.3689892 C29.5923938,28.1843774 29.7308526,28.0228421 29.846235,27.9074598 C29.8923879,27.8613068 29.9154644,27.8382304 29.9616173,27.7920774 C30.1231526,27.6305421 30.238535,27.5151597 30.3077644,27.5151597 C30.4000703,27.5382362 30.5154527,27.6074656 30.6077586,27.676695 C30.9539056,27.9074598 31.2769763,28.161301 31.6000469,28.4382186 C32.4307999,29.1535893 33.7692353,30.4458717 34,30.8612482 C34,30.9304777 34,31.0227836 33.8615412,31.1612424 C33.4000117,31.7150777 32.8230999,32.2689131 32.1308057,32.8458249 C31.5769704,33.2842779 31.0000586,33.7227308 30.3539174,33.9073426 L30.3308409,33.9073426 C30.2846879,33.9304191 29.4770114,34.2073367 28.2078054,33.6765779 L28.1616525,33.6535014 C28.138576,33.6535014 26.5693759,33.1688955 24.6540287,31.7843071 C21.884852,29.7997305 19.1849047,26.5921008 18.4233811,25.6459655 C16.808028,23.6613888 16.3464986,21.8845005 16.3464986,21.861424 L16.3234221,21.7921946 C15.7926633,20.5460651 16.0695809,19.7153121 16.0926574,19.6922356 Z" />
            </g>

            <g fill="#FFFFFF" fillRule="nonzero" transform="translate(-11,-18)">
              <path
                d="M26.7631667,42.4036586 C27.5531197,43.3821268 30.3179549,46.6902811 33.2221936,48.7637018 C35.197076,50.1615135 36.7769818,50.6973413 37.0093209,50.7672319 C37.7295721,51.0700911 38.3336538,51.1399817 38.8215659,51.1399817 C39.3559458,51.1399817 39.7044545,51.0467943 39.7973901,51.0002005 C40.6105769,50.7672319 41.2843603,50.254701 41.9116759,49.7654669 C42.6783949,49.1597485 43.2824766,48.5540301 43.7936226,47.9483117 C44.0956634,47.5755619 44.2118329,47.2028121 44.0956634,46.7834686 L44.0491956,46.7368749 C43.7006869,45.9214847 41.4005299,43.9412515 41.377296,43.9179546 C41.0287873,43.6383923 40.6802787,43.3355331 40.2853022,43.0792676 C40.0994309,42.9627833 39.8670918,42.8230021 39.6115188,42.7764084 C39.0306711,42.6832209 38.6821624,43.0792676 38.4498233,43.3355331 C38.4265894,43.3588299 38.3801216,43.4054236 38.3568877,43.4287205 C38.2174842,43.5685017 38.0548469,43.7548766 37.8922095,43.9412515 C37.6134026,44.2674075 37.0557888,44.9197196 36.8699175,44.9896102 C36.5911106,45.036204 35.5223507,44.4071887 34.9879708,43.9645483 C33.384831,42.6366272 31.9675625,41.2155186 31.3634809,40.3302379 L31.340247,40.306941 C30.3876567,38.9324262 30.294721,38.5130827 30.3179549,38.4198952 C30.3876567,38.2102235 31.0382061,37.6510988 31.3634809,37.3715365 C31.5493521,37.2084584 31.7352234,37.0453804 31.8746269,36.9055992 C31.8978608,36.8823024 31.9443286,36.8357086 31.9675625,36.8124118 C32.2231355,36.5794432 32.618112,36.2066934 32.5251764,35.6242718 C32.4787085,35.3680064 32.362539,35.1350377 32.2231355,34.9486629 C31.9675625,34.5526162 31.6655217,34.1798664 31.3867148,33.8537104 C31.340247,33.8537104 29.3653646,31.547321 28.5521778,31.1978681 L28.4824761,31.1745713 C28.0874996,31.0813838 27.6925231,31.1745713 27.3207806,31.4774305 C26.7166989,31.9899614 26.1126173,32.5956798 25.5085356,33.3644763 C24.9973896,33.9934915 24.5094775,34.6691005 24.2771384,35.4844907 C24.2074367,35.6708656 23.9053959,36.7425212 24.5094775,38.2568172 C24.6024131,38.5363795 25.1135592,40.3535348 26.7631667,42.4036586 Z M25.2326391,35.8322173 L25.2557156,35.7860644 C25.4403274,35.1399231 25.8787803,34.5399348 26.3172333,34.009176 C26.8941451,33.2938053 27.4479805,32.73997 28.0018158,32.2784405 C28.1171982,32.1861347 28.209504,32.1399817 28.255657,32.1399817 C28.255657,32.1399817 28.2787335,32.1399817 28.2787335,32.1399817 C28.69411,32.3707464 29.9863924,33.7091818 30.6786866,34.5399348 C30.9556043,34.8630055 31.2325219,35.1860761 31.4402102,35.5322232 C31.5094396,35.6476055 31.578669,35.7399114 31.6017455,35.8322173 C31.624822,35.9014467 31.5094396,36.0168291 31.3248278,36.1783644 C31.2786749,36.2245173 31.2555984,36.2475938 31.2094455,36.2937467 C31.0940631,36.4091291 30.9325278,36.5475879 30.747916,36.7091232 C30.0556218,37.2860351 29.5710159,37.7475645 29.4325571,38.162941 C29.2710218,38.6706234 29.5940924,39.4090705 30.5863807,40.8167353 L30.6094572,40.8398118 C31.3940572,41.970559 33.1247927,43.585912 34.3939987,44.6243533 C34.4170751,44.6474298 36.21704,46.1012475 37.1170224,45.8243299 C37.5554754,45.685871 37.9939284,45.2012651 38.5708402,44.5089709 C38.7323755,44.3243592 38.8708343,44.1628238 38.9862167,44.0474415 C39.0323696,44.0012885 39.0554461,43.9782121 39.101599,43.9320591 C39.2631343,43.7705238 39.3785167,43.6551415 39.4477461,43.6551415 C39.540052,43.6782179 39.6554344,43.7474473 39.7477403,43.8166768 C40.0938873,44.0474415 40.416958,44.3012827 40.7400286,44.5782003 C41.5707816,45.293571 42.909217,46.5858534 43.1399817,47.00123 C43.1399817,47.0704594 43.1399817,47.1627653 43.0015229,47.3012241 C42.5399934,47.8550594 41.9630816,48.4088948 41.2707874,48.9858066 C40.7169521,49.4242596 40.1400403,49.8627125 39.4938991,50.0473243 L39.4708226,50.0473243 C39.4246696,50.0704008 38.6169931,50.3473185 37.3477871,49.8165596 L37.3016342,49.7934831 C37.2785577,49.7934831 35.7093576,49.3088772 33.7940104,47.9242889 C31.0248337,45.9397122 28.3248864,42.7320826 27.5633628,41.7859472 C25.9480097,39.8013706 25.4864803,38.0244822 25.4864803,38.0014057 L25.4634038,37.9321763 C24.932645,36.6860468 25.2095626,35.8552938 25.2326391,35.8322173 Z"
                id="Shape-Copy-6"
                transform="translate(34.139982, 41.139982) rotate(134.000000) translate(-34.139982, -41.139982) "
              />
            </g>

            <path
              fill="#FFFFFF"
              ref={this.dragCircle}
              onMouseDown={() => this.handleDragStart()}
              d={`
                m${btnPhonePos.x} ${btnPhonePos.y}
                c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm-4.72-15.19c.51.63 2.27 2.74 4.13 4.07 1.26.89 2.28 1.24 2.42 1.28.47 .2.86 .24 1.17.24 .34 0 .56-.06.62-.09.52-.15.95-.48 1.35-.79.49-.39.88-.78 1.2-1.16.19-.24.27-.48.19-.75l-.02-.03c-.22-.52-1.7-1.79-1.71-1.8-.22-.18-.44-.38-.7-.54-.11-.07-.26-.16-.43-.19-.37-.06-.59.19-.74.35-.02.02-.05.05-.06.06-.09.09-.19.21-.3.33-.18.21-.53.63-.65.67-.18.03-.86-.37-1.2-.66-1.03-.85-1.93-1.76-2.32-2.33l-.01-.01c-.62-.87-.68-1.14-.67-1.2.04-.13.46-.49.67-.67.12-.1.24-.21.33-.3l.06-.06c.16-.15.42-.39.36-.76-.03-.16-.1-.31-.19-.43-.16-.25-.34-.48-.54-.7-.03 0-1.29-1.48-1.81-1.7l-.04-.01c-.25-.06-.51 0-.74.19-.39.33-.77.72-1.16 1.21-.33.4-.64.83-.79 1.36-.04.12-.24.8 .15 1.77.05 .17.37 1.34 1.43 2.65l0 0z
              `}
            />

            <circle
              cx={elCenter.x}
              cy={elCenter.y}
              r="15"
              fillOpacity="0"
              onMouseDown={() => this.handleDragStart()}
            />
          </svg>
        )}
      </>
    );
  }
}

export default DragSwitch;
