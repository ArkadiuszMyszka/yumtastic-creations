export const favoritesList = async (req, res) => {
  try {
    const user = res.locals.user;
    if (user.favorites.length === 0) {
      //your favorites list is empty
      return res.status(200).json({ favorites: [] });
    }
    res.status(200).json({ favorites: user.favorites });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
