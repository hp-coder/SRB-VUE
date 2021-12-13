import request from '@/utils/request'

export default {
  list() {
    return request({
      url: '/core/admin/core/integralGrade/listAll',
      method: 'get',
    })
  },
  deleteById(id) {
    return request({
      url: '/core/admin/core/integralGrade/remove/' + id,
      method: 'delete',
    })
  },
  save(integralGrade) {
    return request({
      url: '/core/admin/core/integralGrade/save',
      method: 'post',
      data: integralGrade,
    })
  },
  update(integralGrade) {
    return request({
      url: '/core/admin/core/integralGrade/update/',
      method: 'put',
      data: integralGrade,
    })
  },
  getById(id) {
    return request({
      url: '/core/admin/core/integralGrade/get/' + id,
      method: 'get',
    })
  },
}
