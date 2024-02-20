

const shopingListStatus = async (req, res, next) => {
  try {
  
    return res.json("ok").status(200);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

export default shopingListStatus;
