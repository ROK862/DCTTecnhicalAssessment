import fetch from 'node-fetch';
// Recommend using node-fetch for those familiar with JS fetch
/**
  * Author: Robbins J. Kariseb, ALB Harvard.
  * Senior Software Engineer
  * Deepcatch Namibia Holdings
  * Assessment Due Date: 2021-09-16
*/

const ENDPOINT = 'https://nt-cdn.s3.amazonaws.com/colors.json';


/**
 * @param name filter for color name
 * @param hex filter for color hex code
 * @param compName filter for complementary color name
 * @param compHex filter for complementary color hex code
 * @returns Promise
 */

 const fetchColors = async ({ name, hex, compName, compHex }) => { 
  const res = fetch(ENDPOINT);
  /*
   * Your code for filtering against datasets comes here.
   * Please return a filtered json, or promise from fetch function.
   * Run "npm test" to test your results before making your commit.
   */

  return res;
};

// Leave this here
export default fetchColors;
