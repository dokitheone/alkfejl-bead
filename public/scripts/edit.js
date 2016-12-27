function parseName(text) {
    return text.split('\n').map(line => {
        const arr = line.split(' ')
        return {
            first_name: arr.shift(),
            last_name: arr.join(' ')
        }
    })
}


function nameRow(name, $text) {
    const $row = $(`
    <div class="form-group split-name has-feedback">
      <div class="col-md-6">
        <input required class="form-control split-name-first_name" value="${name.first_name}" type="text"> 
        <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
        <div class="help-block with-errors"></div>   
      </div>
      <div class="col-md-6">
        <input required class="form-control split-name-last_name" value="${name.last_name}" type="text">
        <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
        <div class="help-block with-errors"></div>   
      </div>      
    </div>
  `)

    $row.insertBefore($text)
}

function collectName() {
    const name = []
    $('.split-name').each(function () {
        const $this = $(this)
        const first_name = $this.find('.split-name-first_name').val()
        const last_name = $this.find('.split-name-last_name').val()
        name.push({
            first_name, last_name
        })
    })
    return name.map(name =>
        name.first_name + ' ' + name.last_name
    ).join('\n')
}

const $text = $('#name')

const name = parseName($text.val())
name.forEach(name => {
    nameRow(name, $text)
})

$text.hide()

$('form').on('submit', function (e) {
    const text = collectName()
    if (text.trim() === '') {
        e.preventDefault()
    } else {
        $text.val(text)
    }
})
