import { Request, Response } from 'express';
import { pusher } from "../../services";
import { parser } from "../../utils";


export const startReading = async (_req: Request, res: Response) => {

  parser.on('open', function () {
    console.log('connection is opened');
  });

  parser.on('data', async function (data: any) {
    let enc = new TextDecoder();
    let arr = new Uint8Array(data)
    let ready = enc.decode(arr)
    // let temp = parseInt(data, 10) + " °C";
    console.log(ready);
    
    const response = await pusher.trigger("my-channel", "my-event", {
      message: ready.toString()
    });
  });

  parser.on('error', (err: Error) => console.log(err));

  res.render("index");

};

// export const otraruta = async (_req: Request, res: Response) => {

//   res.status(201).json({
//     ok: true,
//     data: "Hola desde mi otra ruta",
//   });
// }