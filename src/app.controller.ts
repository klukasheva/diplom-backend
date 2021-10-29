import { Controller, Get, Param, Res } from "@nestjs/common";

@Controller('/files')
export class AppController{
    @Get(':imgpath')
    seeUploadedFile(@Param('imgpath') image, @Res() res) {
        return res.sendFile(image, { root: './uploads' });
    }
}