import * as Express from "express";

const app= Express();

app.get('/',(req: Express.Request, res: Express.Response) => res.json(
    {
      "result":"OK"
    }
    ));

app.listen(4999,() =>console.log("listen OK"));
