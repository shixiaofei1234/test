import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

async function getFakeCaptcha(req: Request, res: Response) {
  await waitTime(2000);
  return res.json('captcha-xxx');
}

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;

/**
 * 当前用户的权限，如果为空代表没登录
 * current user access， if is '', user need login
 * 如果是 pro 的预览，默认是有权限的
 */
let access = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site' ? 'admin' : '';

const getAccess = () => {
  return access;
};

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'POST /api/login/account': async (req: Request, res: Response) => {
    // const { password, username, type } = req.body;
    await waitTime(2000);
    res.send({
      status: 200,
      data: '',
      success: true,
      message: '登录成功',
    });
    access = 'admin';
  },
  'GET /api/user/info': async (req: Request, res: Response) => {
    // const { password, username, type } = req.body;
    await waitTime(1000);
    res.send({
      status: 200,
      data: '',
      success: true,
      message: '成功',
    });
    access = 'admin';
  },
};
