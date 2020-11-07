function sqrt(a)
{
  try {
    if (a <= 0) {
      throw "error";
    }
    else{
      console.log(`Square root of ${a} equals ${Math.sqrt(a).toFixed(0)}`);
    }
  }
  catch (x){
    if (x=="error"){
      console.log("X less or equals 0");
    }
    else{console.error(x);}
  }
}
sqrt(244);
sqrt(0);