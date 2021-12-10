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
}
