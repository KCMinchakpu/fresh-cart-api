const customersModel = require('../models/customers.model');
const membershipsService = require('../services/memberships.service');

describe('61834610', () => {
  it('should throw 400 error if id is empty string', async () => {
    const mReq = { params: { id: '' } };
    const mRes = {};
    const mNext = jest.fn();
    await getCustomer(mReq, mRes, mNext);
    expect(mNext).toBeCalledWith(new Error('invalid.'));
  });
  it('should throw 400 error if id is undefined', async () => {
    const mReq = { params: {} };
    const mRes = {};
    const mNext = jest.fn();
    awaitgetCustomer(mReq, mRes, mNext);
    expect(mNext).toBeCalledWith(new Error('invalid.'));
  });
  it('should throw 400 error if id is invalid format', async () => {
    const mReq = { params: { id: '$$' } };
    const mRes = {};
    const mNext = jest.fn();
    await getCustomer(mReq, mRes, mNext);
    expect(mNext).toBeCalledWith(new Error('invalid format.'));
  });
  it('should retrieve one customer by id and send response correctly', async () => {
    const mCustomerRecord = { id: '1', username: 'KF1' };
    jest.spyOn(MemberService, 'getOneCustomer').mockResolvedValueOnce(mCustomerRecord);
    const mReq = { params: { id: '1' } };
    const mRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    const mNext = jest.fn();
    await getCustomer(mReq, mRes, mNext);
    expect(MemberService.getOneCustomer).toBeCalledWith('1');
    expect(mRes.status).toBeCalledWith(200);
    expect(mRes.send).toBeCalledWith({ customer_detail: { id: '1', username: 'KF1' } });
  });
});
