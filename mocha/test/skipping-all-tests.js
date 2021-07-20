describe('outer', function () {
    before(function () {
        this.skip();
    });

    after(function () {
        // will be executed
    });

    it('this test should be skipped', function () {

    })

    describe('inner', function () {
        before(function () {
            // will be skipped
        });

        after(function () {
            // will be skipped
        });

        it('this inner test will also be skipped', function () {

        })
    });
});