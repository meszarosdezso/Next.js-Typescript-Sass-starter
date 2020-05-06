import { NextApiRequest, NextApiResponse } from "next"

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.send({ message: "Next.js + Typescript + Sass = ❤️" })
}
