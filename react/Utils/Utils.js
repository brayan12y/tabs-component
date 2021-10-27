export const Currency = ({
    amount,
    decimalCount = 0,
    decimal = '.',
    thousands = '.',
  }) => {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? '-' : '';
  
      let i = parseInt(
        (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
      ).toString();
      let j = i.length > 3 ? i.length % 3 : 0;
  
      return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
        (decimalCount
          ? decimal +
            Math.abs(amount - i)
              .toFixed(decimalCount)
              .slice(2)
          : '')
      );
    } catch (e) {
      //console.log(e)
    }
  };
  export const validateProductInOrder = (itemsOrder, productId) => {
    const filterItems = itemsOrder.filter((item) => item.productId === productId);
    if (filterItems.length >= 0) {
      return true;
    }
  
    return false;
  };
  
  /**
   * @name queryParamsToObject
   * @param {string} params
   * @returns {object}
   * @description Read string and build json object
   */
  export const queryParamsToObject = (params) => {
    const output = {};
    const searchParams = new URLSearchParams(params);
  
    new Set([...searchParams.keys()]).forEach((key) => {
      output[key] =
        searchParams.getAll(key).length > 1
          ? searchParams.getAll(key)
          : searchParams.get(key);
    });
    return output;
  };
  
  /**
   * @name genNumId
   * @returns {number}
   * @description Return unique id
   */
  export const genNumId = () => {
    return Math.round(new Date().getTime() * Math.random());
  };
  
  /**
   * @name isMobile
   * @description Run through a list of devices and checking if the useragent matches,
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
   */
  export const isMobile = () => {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];
    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  };
  
  /**
   * @name noScrollHTML
   * @description Set some style properties to HTML Tag for disabled scroll
   * @param {boolean} status By default is true
   */
  export const noScrollHTML = (status = true) => {
    const HTML = document.querySelector('html');
    const SCROLL = {
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      height: '100%',
      overflowY: 'scroll',
      zIndex: 10,
    };
    if (status) Object.assign(HTML.style, SCROLL);
    else HTML.style = '';
  };
  
  /**
   * @name removeAccents
   * @description Remove accents to word
   * @param {string} text By default is a empty string
   */
  export const removeAccents = (text = '') => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };
  