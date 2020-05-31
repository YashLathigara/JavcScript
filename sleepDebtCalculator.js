const getSleepHours = day => {
  if (day === 'MONDAY'.toUpperCase()) {
    return 10;
  } else if (day === 'TUESDAY') {
    return 10;
  } else if (day === 'WEDNESDAY') {
    return 10;
  } else if (day === 'THURSDAY') {
    return 10;
  } else if (day === 'FRIDAY') {
    return 10;
  } else if (day === 'SATURDAY') {
    return 10;
  } else if (day === 'SUNDAY') {
    return 10;
  }
}
//console.log(getSleepHours('monday'.toUpperCase())); this is to check if the above logic is working well

const getActualSleepHours = () => {
 let sum = getSleepHours('MONDAY') + getSleepHours('TUESDAY') + getSleepHours('WEDNESDAY') + getSleepHours('THURSDAY') + 
 getSleepHours('FRIDAY') + getSleepHours('SATURDAY') + + getSleepHours('SUNDAY') ;
  return sum;
};
//console.log(getActualSleepHours()); this is to check if the above logic is working well

const getIdealSleepHours = () => {
  const idealHours = 7 * 7;
  return idealHours;
};
//console.log(getIdealSleepHours())  this is to check if the above logic is working well

const  calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){
    console.log('You got the perfect amout of sleep.')
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You need to sleep ' + (actualSleepHours - idealSleepHours) + ' hours less.')
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You need to sleep ' + (idealSleepHours - actualSleepHours) + ' hours more.')
  }
};

calculateSleepDebt();
